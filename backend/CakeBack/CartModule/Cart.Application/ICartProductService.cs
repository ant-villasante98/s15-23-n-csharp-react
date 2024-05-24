using Cart.Domain.Models;

namespace Cart.Application;

public interface ICartProductService
{
    Task<List<CartProduct>> Update(int userId, List<CartProduct> products);

    Task<List<CartProduct>> GetCartByUserId(int userId);

    Task ToEmptyCartByUserId(int userId);

    Task Update(int userId, CartProduct product);

    Task AddProduct(int userId, CartProduct product);

    Task DeleteProduct(int userId, int productId);

    Task IncreaseProduct(int userId, int productId, int count);

    Task DecreaseProduct(int userId, int productId, int count);

    Task<CartProduct?> GetByProductIdAndUserId(int userId, int productId);
}
