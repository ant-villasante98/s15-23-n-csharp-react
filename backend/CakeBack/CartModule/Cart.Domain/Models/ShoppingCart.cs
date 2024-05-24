using Cart.Domain.Models;

namespace Cart.Domain.Models;

public class ShoppingCart
{
    public Guid Id { get; init; }

    public int UserId { get; set; }

    public ICollection<CartProduct> Products { get; set; } = new List<CartProduct>();

    public static ShoppingCart Create(int userId, ICollection<CartProduct> products)
    {
        return new ShoppingCart()
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            Products = products
        };
    }

    public void UpdateOneProduct(CartProduct product)
    {
        CartProduct? productFind = this.GetProductById(product.ProductId);
        if (productFind == null)
        {
            return;
        }
        productFind.UpdateCount(product.ProductId);
        if (productFind.Count <= 0)
        {
            this.RemoveProduct(product);
        }
    }

    public void RemoveProduct(CartProduct product)
    {
        Products.Remove(product);
    }

    public void AddProduct(CartProduct product)
    {
        if (product.Count <= 0)
        {
            return;
        }
        Products.Add(product);
    }

    public CartProduct? GetProductById(int productId)
    {
        return Products.FirstOrDefault(p => p.ProductId == productId);
    }

    public void ToEmptyProducts()
    {
        Products.Clear();
    }
}