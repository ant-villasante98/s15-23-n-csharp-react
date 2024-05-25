using System.Net.Http.Headers;
using Cart.Domain.Models;
using Cart.Domain.Repositories;

namespace Cart.Application;
public class CartProductService(ICartProductRespository _cartProductRespository) : ICartProductService
{
    public async Task AddProduct(int userId, CartProduct product)
    {
        CartProduct? productFound = await GetByProductIdAndUserId(userId, product.ProductId);
        if (productFound == null)
        {
            await _cartProductRespository.AddAsync(product);
            return;
        }

        productFound.IncreaseCount(product.Count);
        await _cartProductRespository.UpdateAsync(productFound);
    }

    public async Task DecreaseProduct(int userId, int productId, int count)
    {
        CartProduct? cartProduct = await GetByProductIdAndUserId(userId, productId);
        if (cartProduct == null)
        {
            return;
        }

        cartProduct.DecreaseCount(count);
        if (cartProduct.Count <= 0)
        {
            await _cartProductRespository.DeleteAsync(cartProduct);
            return;
        }
        await _cartProductRespository.UpdateAsync(cartProduct);
    }

    public async Task DeleteProduct(int userId, int productId)
    {
        CartProduct? product = await GetByProductIdAndUserId(userId, productId);
        if (product is null)
        {
            return;
        }

        await _cartProductRespository.DeleteAsync(product);
    }

    public Task<List<CartProduct>> GetCartByUserId(int userId)
    {
        return _cartProductRespository.FindByUserIdAsync(userId);
    }

    public async Task IncreaseProduct(int userId, int productId, int count)
    {
        CartProduct? product = await GetByProductIdAndUserId(userId, productId);
        if (product is null)
        {
            return;
        }

        product.IncreaseCount(count);
        await _cartProductRespository.UpdateAsync(product);
    }

    public async Task ToEmptyCartByUserId(int userId)
    {
        await _cartProductRespository.DeleteManyByUserIdAsync(userId);
    }

    public Task<List<CartProduct>> Update(int userId, List<CartProduct> products)
    {
        throw new NotImplementedException();
    }

    public async Task Update(int userId, CartProduct product)
    {
        CartProduct? productFound = await GetByProductIdAndUserId(userId, product.ProductId);
        if (productFound is null)
        {
            return;
        }

        productFound.Count = product.Count;
        await _cartProductRespository.UpdateAsync(productFound);
    }

    public async Task<CartProduct?> GetByProductIdAndUserId(int userId, int productId)
    {
        return await _cartProductRespository.FindByProductIdAndUserIdAsync(userId, productId);
    }
}