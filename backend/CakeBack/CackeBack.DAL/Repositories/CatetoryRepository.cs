using CackeBack.DAL.Dbcontext;
using CackeBack.DAL.Interface;
using CakeBack.Models.Entidades;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CackeBack.DAL.Repositories
{
    public class CatetoryRepository : IGenericRepository<Category>
    {

        private readonly CakeDbContext _dbContext;

        public CatetoryRepository(CakeDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<bool> Insertar(Category modelo)
        { 
            try
            {

                var exist = await _dbContext.categories.Where(p => p.Id == modelo.Id).FirstAsync();

                if (exist != null)
                {
                    throw new Exception($"El producto ya existe{modelo.Nombre}");
                }

                _dbContext.Add(modelo);
                await _dbContext.SaveChangesAsync();


                return true;

            }
            catch (Exception ex)
            {
                throw new Exception($"el producto tiene un problema {modelo.Nombre}");

            }
        }

        public async Task<bool> Actualizar(int id, Category modelo)
        {
            try
            {

                var datos = await _dbContext.Products.Where(p => p.Id == id).FirstAsync();

                if (datos != null)
                {
                    throw new Exception($"El producto ya existe{modelo.Nombre}");
                }

                datos.Name = modelo.Nombre;


                _dbContext.Update(datos);

                await _dbContext.SaveChangesAsync();


                return true;

            }
            catch (Exception ex)
            {
                throw new Exception($"el producto tiene un problema {modelo.Nombre}");

            }
        }

        public async Task<bool> Eliminar(int id)
        {
            try
            {

                var datos = await _dbContext.categories.Where(p => p.Id == id).FirstAsync();

                if (datos == null)
                {
                    throw new Exception($"El producto no existe{id}");
                }




                _dbContext.Remove(id);

                await _dbContext.SaveChangesAsync();


                return true;

            }
            catch (Exception ex)
            {
                throw new Exception($"el producto tiene un problema {id}");

            }
        }


        public Task<Category> Obtener(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IQueryable<Category>> ObtenerTodos()
        {
            throw new NotImplementedException();
        }
    }
}
