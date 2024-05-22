namespace Cart.Domain.Models;

public class Product
{
    public int Id { get; set; }

    public int Count { get; set; }

    public static Product Create(int id, int count)
    {
        return new Product { Id = id, Count = count };
    }

    public void IncreaseCount(int count)
    {
        Count = Count + count;
    }

    public void DecreaseCount(int count)
    {
        Count = Count - count;
    }
}