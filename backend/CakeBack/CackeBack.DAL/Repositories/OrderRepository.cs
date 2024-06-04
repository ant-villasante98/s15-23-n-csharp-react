using CackeBack.DAL.Dbcontext;
using CackeBack.DAL.Interface;
using CakeBack.Models.Entidades;
using Microsoft.EntityFrameworkCore;

namespace CackeBack.DAL.Repositories;

public class OrderRepository(CakeDbContext _context) : IOrderRepository
{
    public async Task<bool> Actualizar(Order modelo)
    {
        try
        {
            _context.Orders.Update(modelo).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return true;
        }
        catch (System.Exception)
        {
            return false;
        }
    }

    public Task<bool> Actualizar(int id, Order modelo)
    {
        throw new NotImplementedException();
    }

    public async Task<bool> Eliminar(int id)
    {
        var order = await Obtener(id);
        if (order is null)
        {
            return false;
        }
        using var trans = await _context.Database.BeginTransactionAsync();
        try
        {

            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();
            await trans.CommitAsync();
            return true;
        }
        catch (Exception)
        {
            await trans.RollbackAsync();
            return false;
        }
    }

    public async Task<IEnumerable<Order>> FindByUserId(string userId)
    {
        return await _context.Orders.Where(x => x.UserId.Equals(userId)).Include(x => x.OrderDetails).ToListAsync();
    }

    public async Task<bool> Insertar(Order modelo)
    {
        try
        {
            _context.Orders.Add(modelo).State = EntityState.Added;
            await _context.SaveChangesAsync();
            return true;
        }
        catch (Exception)
        {
            return false;
        }
    }

    public async Task<Order> Obtener(int id)
    {
        return await _context.Orders.Include(x => x.OrderDetails).FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task<IQueryable<Order>> ObtenerTodos()
    {
        IQueryable<Order> query = _context.Orders.Include(x => x.OrderDetails);
        return query;
    }
}