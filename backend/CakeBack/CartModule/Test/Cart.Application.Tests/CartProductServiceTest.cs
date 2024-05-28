using Cart.Domain.Models;
using Cart.Domain.Repositories;

namespace Cart.Application.Tests;

public class CartProductServiceTest
{
    [Fact]
    public async void AddNewProductToCart()
    {
        // Arrage
        Guid guid = Guid.NewGuid();
        string userId = "user1";
        int productId = 1;
        CartProduct cartProduct = new CartProduct()
        {
            Id = guid,
            Count = 2,
            UserId = userId,
            Image = "hola",
            Name = "producto 1",
            Price = 35.4,
            ProductId = productId
        };


        var mockCartProducctRepocitory = new Mock<ICartProductRespository>();

        mockCartProducctRepocitory.Setup(x => x.FindByProductIdAndUserIdAsync(userId, productId));

        var cartProductService = new CartProductService(mockCartProducctRepocitory.Object);

        // Act

        await cartProductService.AddProduct(userId, cartProduct);

        // Assert

        mockCartProducctRepocitory.Verify(r => r.AddAsync(cartProduct), Times.Once());
        mockCartProducctRepocitory.Verify(r => r.UpdateAsync(It.IsAny<CartProduct>()), Times.Never());
    }

    [Fact]
    public async void AddExistedProductToCart()
    {
        // Arrage
        Guid guid = Guid.NewGuid();
        string userId = "user1";
        int productId = 1;
        int countInit = 3;
        CartProduct cartProduct = new CartProduct()
        {
            Id = guid,
            Count = 4,
            UserId = userId,
            Image = "hola",
            Name = "producto 1",
            Price = 35.4,
            ProductId = productId
        };

        CartProduct cartProductFound = new CartProduct()
        {
            Id = guid,
            Count = countInit,
            UserId = userId,
            Image = "hola",
            Name = "producto 1",
            Price = 35.4,
            ProductId = productId
        };

        var mockCartProducctRepocitory = new Mock<ICartProductRespository>();

        mockCartProducctRepocitory.Setup(x => x.FindByProductIdAndUserIdAsync(userId, productId)).ReturnsAsync(cartProductFound);
        mockCartProducctRepocitory.Setup(x => x.UpdateAsync(cartProductFound));

        var cartProductService = new CartProductService(mockCartProducctRepocitory.Object);

        // Act

        await cartProductService.AddProduct(userId, cartProduct);

        // Assert

        Assert.Equal(countInit + cartProduct.Count, cartProductFound.Count);
        mockCartProducctRepocitory.Verify(r => r.UpdateAsync(cartProductFound), Times.Once());
    }

    [Fact]
    public async Task ShoudDecreaseCountOfProduct()
    {
        // Arrage
        Guid guid = Guid.NewGuid();
        string userId = "user1";
        int productId = 1;
        int decreasedCount = 2;
        int expectedCount = 3;
        CartProduct cartProduct = new CartProduct()
        {
            Id = guid,
            Count = 5,
            UserId = userId,
            Image = "hola",
            Name = "producto 1",
            Price = 35.4,
            ProductId = productId
        };


        var mockCartProducctRepocitory = new Mock<ICartProductRespository>();

        mockCartProducctRepocitory.Setup(x => x.FindByProductIdAndUserIdAsync(userId, productId))
            .ReturnsAsync(cartProduct);

        var cartProductService = new CartProductService(mockCartProducctRepocitory.Object);

        // Act

        await cartProductService.DecreaseProduct(userId, productId, decreasedCount);

        // Assert

        mockCartProducctRepocitory.Verify(r => r.DeleteAsync(cartProduct), Times.Never());
        mockCartProducctRepocitory.Verify(r => r.UpdateAsync(cartProduct), Times.Once());
        Assert.Equal(expectedCount, cartProduct.Count);
        Assert.Equal(guid, cartProduct.Id);
    }

    [Fact]
    public async Task DecreaseLessEqualZero_ShoudDeleteProduct()
    {
        // Arrage
        Guid guid = Guid.NewGuid();
        string userId = "user1";
        int productId = 1;
        int decreasedCount = 5;
        CartProduct cartProduct = new CartProduct()
        {
            Id = guid,
            Count = 5,
            UserId = userId,
            Image = "hola",
            Name = "producto 1",
            Price = 35.4,
            ProductId = productId
        };


        var mockCartProducctRepocitory = new Mock<ICartProductRespository>();

        mockCartProducctRepocitory.Setup(x => x.FindByProductIdAndUserIdAsync(userId, productId))
            .ReturnsAsync(cartProduct);
        mockCartProducctRepocitory.Setup(x => x.DeleteAsync(cartProduct));

        var cartProductService = new CartProductService(mockCartProducctRepocitory.Object);

        // Act

        await cartProductService.DecreaseProduct(userId, productId, decreasedCount);

        // Assert
        mockCartProducctRepocitory.Verify(r => r.DeleteAsync(cartProduct), Times.Once());
        mockCartProducctRepocitory.Verify(r => r.UpdateAsync(It.IsAny<CartProduct>()), Times.Never());
        Assert.Equal(0, cartProduct.Count);
    }

    [Fact]
    public async Task DeleteExistedProduct()
    {
        // Arrage
        Guid guid = Guid.NewGuid();
        string userId = "user1";
        int productId = 1;
        int decreasedCount = 5;
        CartProduct cartProduct = new CartProduct()
        {
            Id = guid,
            Count = 5,
            UserId = userId,
            Image = "hola",
            Name = "producto 1",
            Price = 35.4,
            ProductId = productId
        };


        var mockCartProducctRepocitory = new Mock<ICartProductRespository>();

        mockCartProducctRepocitory.Setup(x => x.FindByProductIdAndUserIdAsync(userId, productId))
            .ReturnsAsync(cartProduct);
        mockCartProducctRepocitory.Setup(x => x.DeleteAsync(cartProduct));

        var cartProductService = new CartProductService(mockCartProducctRepocitory.Object);

        // Act

        await cartProductService.DeleteProduct(userId, productId);

        // Assert
        mockCartProducctRepocitory.Verify(r => r.FindByProductIdAndUserIdAsync(userId, productId), Times.Once());
        mockCartProducctRepocitory.Verify(r => r.DeleteAsync(cartProduct), Times.Once());
    }


    [Fact]
    public async Task GetCartByUser()
    {
        // Arrage
        string userId = "user1";
        CartProduct cartProduct1 = new CartProduct()
        {
            Id = Guid.NewGuid(),
            Count = 5,
            UserId = userId,
            Image = "hola",
            Name = "producto 1",
            Price = 35.4,
            ProductId = 1
        };
        CartProduct cartProduct2 = new CartProduct()
        {
            Id = Guid.NewGuid(),
            Count = 5,
            UserId = userId,
            Image = "hola",
            Name = "producto 1",
            Price = 35.4,
            ProductId = 2
        };

        var mockCartProducctRepocitory = new Mock<ICartProductRespository>();

        mockCartProducctRepocitory.Setup(r => r.FindByUserIdAsync(userId))
            .ReturnsAsync(new List<CartProduct>() { cartProduct1, cartProduct2 });

        var cartProductService = new CartProductService(mockCartProducctRepocitory.Object);

        // Act
        List<CartProduct> cartProducts = await cartProductService.GetCartByUserId(userId);

        // Assert

        Assert.Equal(2, cartProducts.Count);
        Assert.NotEmpty(cartProducts);
    }

    [Fact]
    public async Task UpdateProduct()
    {
        // Arrage
        Guid guid = Guid.NewGuid();
        string userId = "user1";
        int productId = 1;
        int countInit = 3;
        CartProduct cartProduct = new CartProduct()
        {
            Id = guid,
            Count = 4,
            UserId = userId,
            Image = "hola",
            Name = "producto 1",
            Price = 35.4,
            ProductId = productId
        };

        CartProduct cartProductFound = new CartProduct()
        {
            Id = guid,
            Count = countInit,
            UserId = userId,
            Image = "hola",
            Name = "producto 1",
            Price = 35.4,
            ProductId = productId
        };

        var mockCartProducctRepocitory = new Mock<ICartProductRespository>();

        mockCartProducctRepocitory.Setup(x => x.FindByProductIdAndUserIdAsync(userId, productId)).ReturnsAsync(cartProductFound);
        mockCartProducctRepocitory.Setup(x => x.UpdateAsync(cartProductFound));

        var cartProductService = new CartProductService(mockCartProducctRepocitory.Object);

        // Act

        await cartProductService.Update(userId, cartProduct);

        // Assert

        Assert.Equal(cartProduct.Count, cartProductFound.Count);
        mockCartProducctRepocitory.Verify(r => r.UpdateAsync(cartProductFound), Times.Once());
    }

    [Fact]
    public async Task GetOneCartProduct()
    {
        // Arrage
        Guid guid = Guid.NewGuid();
        string userId = "user1";
        int productId = 1;
        CartProduct expectedcartProduct = new CartProduct()
        {
            Id = guid,
            Count = 2,
            UserId = userId,
            Image = "hola",
            Name = "producto 1",
            Price = 35.4,
            ProductId = productId
        };


        var mockCartProducctRepocitory = new Mock<ICartProductRespository>();

        mockCartProducctRepocitory.Setup(x => x.FindByProductIdAndUserIdAsync(userId, productId))
            .ReturnsAsync(expectedcartProduct);

        var cartProductService = new CartProductService(mockCartProducctRepocitory.Object);

        // Act

        CartProduct? cartProductFound = await cartProductService.GetByProductIdAndUserId(userId, productId);

        // Assert
        Assert.NotNull(cartProductFound);
        Assert.Equal(expectedcartProduct.Id, cartProductFound.Id);
        Assert.Equal(expectedcartProduct.ProductId, cartProductFound.ProductId);
        Assert.Equal(expectedcartProduct.Name, cartProductFound.Name);
        Assert.Equal(expectedcartProduct.Count, cartProductFound.Count);
        Assert.Equal(expectedcartProduct.Price, cartProductFound.Price);
        Assert.Equal(expectedcartProduct.Image, cartProductFound.Image);

    }
}