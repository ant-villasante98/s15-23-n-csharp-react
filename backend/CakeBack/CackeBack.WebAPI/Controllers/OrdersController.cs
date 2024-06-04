using CackBack.BLL.Orders.Request;
using CackBack.BLL.Orders.Response;
using CackeBack.BLL.Interfaces;
using CakeBack.Models.Entidades;
using Microsoft.AspNetCore.Mvc;

namespace CackeBack.API.Controllers;

[ApiController]
[Route("api/v1/orders")]
public class OrdersController(IOrderService _orderService) : ControllerBase
{
    static string UserId { get; set; } = "user1";

    [HttpGet]
    public async Task<ActionResult<IEnumerable<OrderResponse>>> GetOrderByUser()
    {
        var orders = await _orderService.GetByUser(UserId);
        return Ok(
            orders.Select(x => ToDto(x))
        );
    }

    [HttpGet("{orderId}")]
    public async Task<ActionResult<OrderResponse>> GetOrderById(int orderId)
    {
        var order = await _orderService.GetById(orderId);
        return Ok(ToDto(order));
    }

    [HttpPost]
    public async Task<ActionResult<OrderResponse>> CreateOrder([FromBody] CreatingOrderRequest creatingOrderRequest)
    {
        var order = await _orderService.Create(UserId, creatingOrderRequest.OrdersDetails);
        return Ok(
            ToDto(order)
            );
    }
    private OrderResponse ToDto(Order order)
    {
        return new OrderResponse(order.Id, order.UserId, order.CreationDate, order.TotalAmount, order.OrderDetails.Select(x => new OrderDetailResponse(x.ProductId, x.Quantity, x.UnitPrice, x.SubTotal, x.Unit)).ToList());
    }
}