using Cart.Domain.Models;

namespace Cart.Domain.Repositories;

public interface ICartRespository
{
    Task AddAsync(ShoppingCart shoppingCart);

    Task UpdateAsync(ShoppingCart shoppingCart);

    Task DeleteAsync(ShoppingCart shoppingCart);

    Task DeleteByIdAsync(Guid shoppingCartId);

    Task UpdateProductByIdAsync(Guid id, int productId, int productCount);

    Task DeleteProductFromCartAsync(Guid id, int productId);

    Task<ShoppingCart> FindByIdAsync(Guid id);

    Task<ShoppingCart> FindByUserIdAsync(int userId);
}