using Cart.Domain.Models;

namespace Cart.Domain.Models;

public class ShoppingCart
{
    public Guid Id { get; set; }

    public int UserId { get; set; }

    public bool IsActive { get; set; }

    public ICollection<Product> Products { get; set; } = new List<Product>();
}