using System.Net.Http.Headers;
using Cart.Domain.Models;
using Cart.Domain.Repositories;

namespace Cart.Application;
public class CartProductService(ICartProductRespository _cartProductRespository) : ICartProductService
{
    public async Task AddProduct(string userId, CartProduct product)
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

    public async Task DecreaseProduct(string userId, int productId, int count)
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

    public async Task DeleteProduct(string userId, int productId)
    {
        CartProduct? product = await GetByProductIdAndUserId(userId, productId);
        if (product is null)
        {
            return;
        }

        await _cartProductRespository.DeleteAsync(product);
    }

    public async Task<List<CartProduct>> GetCartByUserId(string userId)
    {
        return await _cartProductRespository.FindByUserIdAsync(userId);
    }

    public async Task IncreaseProduct(string userId, int productId, int count)
    {
        CartProduct? product = await GetByProductIdAndUserId(userId, productId);
        if (product is null)
        {
            return;
        }

        product.IncreaseCount(count);
        await _cartProductRespository.UpdateAsync(product);
    }

    public async Task ToEmptyCartByUserId(string userId)
    {
        await _cartProductRespository.DeleteManyByUserIdAsync(userId);
    }

    public Task<List<CartProduct>> Update(string userId, List<CartProduct> products)
    {
        throw new NotImplementedException();
    }

    public async Task Update(string userId, CartProduct product)
    {
        CartProduct? productFound = await GetByProductIdAndUserId(userId, product.ProductId);
        if (productFound is null)
        {
            return;
        }

        productFound.Count = product.Count;
        await _cartProductRespository.UpdateAsync(productFound);
    }

    public async Task<CartProduct?> GetByProductIdAndUserId(string userId, int productId)
    {
        return await _cartProductRespository.FindByProductIdAndUserIdAsync(userId, productId);
    }
}