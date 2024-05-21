

using Cart.Domain.Models;

namespace Cart.Domain.Repositories;

public interface ICartRespository
{
    Task AddAsync(ShoppingCart shoppingCart);

    Task UpdateAsync(ShoppingCart shoppingCart);

    Task DeleteAsync(ShoppingCart shoppingCart);

    Task DeleteByIdAsync(Guid shoppingCartId);

    Task UpdateProductCountByIdAsync(Guid id, int productId, int productCount);

    Task DeleteProductFromCart(Guid id, int productId);

    Task<ShoppingCart> FindById(Guid id);
}