using Cart.Domain.Models;

namespace Cart.Domain.Models;

public class ShoppingCart
{
    public Guid Id { get; init; }

    public int UserId { get; set; }

    public bool IsActive { get; set; }

    public ICollection<Product> Products { get; set; } = new List<Product>();

    public static ShoppingCart Create(int userId, ICollection<Product> products)
    {
        return new ShoppingCart()
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            IsActive = true,
            Products = products
        };
    }

    public void SetDesable()
    {
        IsActive = false;
    }


}