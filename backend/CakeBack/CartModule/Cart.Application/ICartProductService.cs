using Cart.Domain.Models;

namespace Cart.Application;

public interface ICartProductService
{
    Task<List<CartProduct>> Update(string userId, List<CartProduct> products);

    Task<List<CartProduct>> GetCartByUserId(string userId);

    Task ToEmptyCartByUserId(string userId);

    Task Update(string userId, int productId, int count);

    Task AddProduct(string userId, CartProduct product);

    Task DeleteProduct(string userId, int productId);

    Task IncreaseProduct(string userId, int productId, int count);

    Task DecreaseProduct(string userId, int productId, int count);

    Task<CartProduct?> GetByProductIdAndUserId(string userId, int productId);
}
