using Cart.Domain.Models;

namespace Cart.Application;

public interface ICartService
{
    Task<ShoppingCart> Create(int userId, List<CartProduct> products);

    Task<ShoppingCart> Update(int userId, List<CartProduct> products);

    Task<ShoppingCart> GetByUserId(int userId);

    Task ToEmptyCartByUserId(int userId);

    Task UpdateProduct(int userId, CartProduct product);

    Task IncreaseProduct(int userId, CartProduct product);

    Task DecreaseProduct(int userId, CartProduct product);
}