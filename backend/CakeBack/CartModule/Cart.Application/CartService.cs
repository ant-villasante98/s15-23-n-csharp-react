using Cart.Domain.Models;
using Cart.Domain.Repositories;

namespace Cart.Application;
public class CartService(ICartRespository _cartRespository) : ICartService
{

    public async Task<ShoppingCart> Create(int userId, List<CartProduct> products)
    {
        ShoppingCart newCart = ShoppingCart.Create(userId, products);
        await _cartRespository.AddAsync(newCart);
        return newCart;
    }

    public async Task<ShoppingCart> GetByUserId(int userId)
    {
        ShoppingCart? cart = await _cartRespository.FindByUserIdAsync(userId);
        return cart;
    }

    public async Task ToEmptyCartByUserId(int userId)
    {
        ShoppingCart? cart = await GetByUserId(userId);
        if (cart is null)
        {
            return;
        }
        cart.ToEmptyProducts();
        await _cartRespository.UpdateAsync(cart);
    }

    public async Task<ShoppingCart> Update(int userId, List<CartProduct> products)
    {
        ShoppingCart cartOriginal = await GetByUserId(userId);
        if (cartOriginal is null)
        {
            return null;
        }

        cartOriginal.ToEmptyProducts();
        foreach (var item in products)
        {
            cartOriginal.AddProduct(item);
        }
        await _cartRespository.UpdateAsync(cartOriginal);
        return cartOriginal;
    }

    public async Task UpdateProduct(int userId, CartProduct product)
    {
        ShoppingCart? cartOriginal = await GetByUserId(userId);
        if (cartOriginal is null)
        {
            return;
        }

        CartProduct? productOriginal = cartOriginal.GetProductById(product.ProductId);
        if (productOriginal is null)
        {
            return;
        }
    }

    public async Task IncreaseProduct(int userId, CartProduct product)
    {
        ShoppingCart? cartOriginal = await GetByUserId(userId);
        if (cartOriginal is null)
        {
            cartOriginal = ShoppingCart.Create(userId, new List<CartProduct> { product });
            await _cartRespository.AddAsync(cartOriginal);
            return;
        }

        CartProduct? productOriginal = cartOriginal.GetProductById(product.ProductId);
        if (productOriginal is null)
        {
            cartOriginal.AddProduct(product);
        }
        else
        {
            productOriginal.IncreaseCount(product.Count);
        }

        await _cartRespository.UpdateAsync(cartOriginal);
    }

    public async Task DecreaseProduct(int userId, CartProduct product)
    {
        ShoppingCart? cartOriginal = await GetByUserId(userId);
        if (cartOriginal is null)
        {
            return;
        }

        CartProduct? productOriginal = cartOriginal.GetProductById(product.ProductId);
        if (productOriginal is null)
        {
            return;
        }
        else
        {
            productOriginal.DecreaseCount(product.Count);
            if (productOriginal.Count <= 0)
            {
                cartOriginal.RemoveProduct(product);
            }
        }

        await _cartRespository.UpdateAsync(cartOriginal);
    }
}