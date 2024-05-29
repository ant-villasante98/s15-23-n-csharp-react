using System.Collections.Immutable;

namespace CakeBack.Models.Entidades;

public class Order
{
    public int Id { get; set; }
    public string UserId { get; set; } = string.Empty;
    public DateTime CreationDate { get; set; }
    public double TotalAmount { get; set; }
    public OrderState State { get; set; }
    // public int TransaccionId { get; set; }
    public List<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();

    private Order() { }
    public Order(int id, string userId, DateTime creationDate, double totalAmount, OrderState state, List<OrderDetail> orderDetails)
    {
        Id = id;
        UserId = userId;
        CreationDate = creationDate;
        TotalAmount = totalAmount;
        State = state;
        OrderDetails = orderDetails;
    }

    public static Order Create(string userId, List<OrderDetail> orderDetails)
    {
        Order order = new Order()
        {
            UserId = userId,
            CreationDate = DateTime.UtcNow,
            TotalAmount = 0,
            State = OrderState.Created,
            OrderDetails = orderDetails
        };
        order.CalculateAmount();
        return order;
    }

    public void CalculateAmount()
    {
        double countAmout = 0;
        OrderDetails.ForEach(x =>
        {
            countAmout += x.SubTotal; ;
        });

        TotalAmount = countAmout;
    }
}

public enum OrderState
{
    Created, // Orden creada
    Paid, // Orden pagada
    Canceled // Order cancelada
}