using Cart.Domain.Models;

namespace Cart.Domain.Repositories;

public interface ICartProductRespository
{
    Task AddAsync(CartProduct cartProduct);

    Task UpdateAsync(CartProduct cartProduct);

    Task DeleteAsync(CartProduct cartProduct);

    Task DeleteAsync(Guid cartProductId);

    Task DeleteManyByUserIdAsync(int userId);

    // Task UpdateProductByIdAsync(Guid id, int productId, int productCount);

    Task<List<CartProduct>> FindByUserIdAsync(int userId);

    Task<CartProduct?> FindByProductIdAndUserIdAsync(int userId, int productId);
}