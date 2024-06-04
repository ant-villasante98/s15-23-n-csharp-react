using CakeBack.Models.Entidades;

namespace CackeBack.DAL.Interface;

public interface IOrderRepository : IGenericRepository<Order>
{
    Task<IEnumerable<Order>> FindByUserId(string userId);
}