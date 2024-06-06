using Microsoft.Identity.Client;

namespace CackBack.BLL.Orders.Response;

public record OrderResponse(
    int Id,
    string User,
    DateTime CreationDate,
    double TotalAmount,
    List<OrderDetailResponse> OrderDetails
);