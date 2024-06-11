using Cart.Domain.Models;

namespace Cart.Domain.Repositories;

public interface ICartProductRespository
{
    Task AddAsync(CartProduct cartProduct);

    Task UpdateAsync(CartProduct cartProduct);

    Task DeleteAsync(CartProduct cartProduct);

    Task DeleteAsync(Guid cartProductId);

    Task DeleteManyByUserIdAsync(string userId);

    // Task UpdateProductByIdAsync(Guid id, int productId, int productCount);

    Task<List<CartProduct>> FindByUserIdAsync(string userId);

    Task<CartProduct?> FindByProductIdAndUserIdAsync(string userId, int productId);
}