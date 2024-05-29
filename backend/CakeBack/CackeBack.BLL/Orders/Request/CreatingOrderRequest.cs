using System.ComponentModel.DataAnnotations;

namespace CackBack.BLL.Orders.Request;

public record CreatingOrderRequest(
    [Required]
    List<CreatingOrderDetailRequest> OrdersDetails
);
public record CreatingOrderDetailRequest(
    [Required]
    int Id,
    [Required]
    int Count
);