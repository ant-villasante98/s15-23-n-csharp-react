namespace Cart.Domain.Models;

public class CartProduct
{
    public Guid Id { get; init; }

    public string UserId { get; set; } = string.Empty;

    public int ProductId { get; set; }

    public int Count { get; set; }

    public double Price { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Image { get; set; } = string.Empty;

    //Todo: lista de categorias

    public static CartProduct Create(int productId, string userId, int count, double price, string name, string image)
    {
        return new CartProduct { Id = Guid.NewGuid(), UserId = userId, ProductId = productId, Count = count, Price = price, Name = name, Image = image };
    }

    public void IncreaseCount(int count)
    {
        Count += count;
    }

    public void DecreaseCount(int count)
    {
        if (Count > count)
        {
            Count -= count;
            return;
        }
        Count = 0;
    }

    public void UpdateCount(int count)
    {
        if (count < 0)
        {
            Count = 0;
            return;
        }
        Count = count;
    }
}