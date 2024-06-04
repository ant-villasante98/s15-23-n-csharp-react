namespace CakeBack.Models.Entidades;

// TODO: posible Json en SQL
public class OrderDetail
{
    public int Id { get; set; }
    public int OrderId { get; set; }
    public int ProductId { get; set; }
    public int Quantity { get; set; }
    public double UnitPrice { get; set; }
    public double SubTotal { get; set; }
    public string Unit { get; set; } = string.Empty;

    private OrderDetail() { }

    public OrderDetail(int id, int orderId, int productId, int quantity, double unitPrice, string unit)
    {
        Id = id;
        OrderId = orderId;
        ProductId = productId;
        Quantity = quantity;
        UnitPrice = unitPrice;
        SubTotal = quantity * unitPrice;
        Unit = unit;
    }

    public static OrderDetail Create(int productId, int quantity, double unitPrice, string unit)
    {
        return new OrderDetail()
        {
            ProductId = productId,
            Quantity = quantity,
            UnitPrice = unitPrice,
            SubTotal = quantity * unitPrice,
            Unit = unit
        };
    }

}