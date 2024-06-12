using CakeBack.Models.Entidades;

namespace CackBack.BLL.Orders.Response;

public record OrderResponse(
    int id,
    string userId,
    DateTime creationDate,
    double totalAmount,
    OrderState state,
    List<OrderDetailResponse> orderDetails,
    string MercadoPagoPreferenceId,
    string MercadoPagoInitPoint

);