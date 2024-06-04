using CackeBack.DAL.Interface;
using CakeBack.Models.Entidades;

namespace CackeBack.DAL.Repositories;

public class MockOrderRepository : IOrderRepository
{
    private readonly static List<Order> orders = new List<Order>();
    public Task<bool> Actualizar(Order modelo)
    {
        throw new NotImplementedException();
    }

    public Task<bool> Eliminar(int id)
    {
        return Task.Run(() =>
        {
            var orderFind = orders.FirstOrDefault(x => x.Id == id);
            return orders.Remove(orderFind);

        });

    }

    public Task<IEnumerable<Order>> FindByUserId(string userId)
    {
        return Task.Run(() => orders.Where(o => o.UserId == userId));
    }

    public Task<bool> Insertar(Order modelo)
    {
        return Task.Run(() =>
        {
            int NextId = orders.Count + 1;
            modelo.Id = NextId;
            modelo.OrderDetails.ForEach(x => x.OrderId = NextId);
            orders.Add(modelo);
            return true;
        });
    }

    public Task<Order> Obtener(int id)
    {
        return Task.Run(() =>
        {
            var result = orders.FirstOrDefault(x => x.Id == id);
            return result;
        });
    }

    public Task<IQueryable<Order>> ObtenerTodos()
    {
        return Task.Run(() => orders.AsQueryable());
    }
}