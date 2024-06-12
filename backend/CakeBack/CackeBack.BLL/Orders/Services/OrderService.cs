using CackBack.BLL.Orders.Request;
using CackeBack.BLL.Interfaces;
using CackeBack.DAL.Interface;
using CakeBack.Models.Entidades;
using MediatR;
using Shared.MediatRImplement.Notifications;

namespace CackeBack.BLL.Services;

// TODO: implementar Fluent Validation
public class OrderService(IOrderRepository _orderRepository, IMediator _mediator, IMercadoPagoService _mercadoPagoService) : IOrderService
{
    public async Task<Order> Create(string user, List<CreatingOrderDetailRequest> orderDetailDtos)
    {
        // verificar lista vacia
        if (orderDetailDtos.Count == 0)
        {
            // TODO: personalizar exection
            return null;
        }

        // TODO: Obtener productos y validar
        List<OrderDetail> orderDetails = VerificarProducts(orderDetailDtos);

        // guardar
        Order order = Order.Create(user, orderDetails);

        //mercado pago
        order.MercadoPagoPreferenceId = "";
        order.MercadoPagoInitPoint = "";

        await _orderRepository.Insertar(order);

        // vaciar carrtio
        await _mediator.Publish(new OrderCreationCompleted(user));
        return order;
    }

    public async Task Delete(int id)
    {
        Order order = await GetById(id);
        // Borrado logico o fisico
        throw new NotImplementedException();
    }

    public async Task<Order> GetById(int id)
    {
        // TODO: el repositorio devuelve null?
        return await _orderRepository.Obtener(id);
    }

    public async Task<IEnumerable<Order>> GetByUser(string user)
    {
        return await _orderRepository.FindByUserId(user);
    }

    public async Task Update(int id, OrderState state)
    {
        Order? order = await GetById(id);
        order.State = state;

        await _orderRepository.Actualizar(order);
    }

    private List<OrderDetail> VerificarProducts(List<CreatingOrderDetailRequest> orderDetails)
    {
        List<OrderDetail> mockOrders = orderDetails.Select((x, i) => OrderDetail.Create(x.Id, x.Count, 1.3d, "unidad")).ToList();
        return mockOrders;
    }
}