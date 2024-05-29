using CackBack.BLL.Orders.Request;
using CakeBack.Models.Entidades;

namespace CackeBack.BLL.Interfaces;

public interface IOrderService
{
    Task<Order> GetById(int id);
    Task<Order> Create(string user, List<CreatingOrderDetailRequest> orderDetails);
    Task Update(int id, OrderState state);
    Task Delete(int id);
    Task<IEnumerable<Order>> GetByUser(string user);
}