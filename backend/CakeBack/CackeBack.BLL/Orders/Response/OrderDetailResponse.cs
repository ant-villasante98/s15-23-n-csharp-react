namespace CackBack.BLL.Orders.Response;

public record OrderDetailResponse(
    int ProductId,
    int Quantity,
    double UnitPrice,
    double SubTotal,
    string Unit
);