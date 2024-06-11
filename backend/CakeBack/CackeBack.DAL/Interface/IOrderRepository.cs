using CakeBack.Models.Entidades;

namespace CackeBack.DAL.Interface;

public interface IOrderRepository : IGenericRepository<Order>
{
    Task<bool> Actualizar(Order modelo);
    Task<IEnumerable<Order>> FindByUserId(string userId);
    Task<Order> GetOrderByPreferenceId(string preferenceId);

}