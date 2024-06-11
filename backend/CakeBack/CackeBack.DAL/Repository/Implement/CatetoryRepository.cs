using CackeBack.DAL.Dbcontext;
using CackeBack.DAL.Repository.Contract;
using CakeBack.Models.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CackeBack.DAL.Repository.Implement
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

                var exist = await _dbContext.Categories.Where(p => p.Id == modelo.Id).FirstAsync();

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

        

        public async Task<Category> Obtener(int id)
        {
            var datos = _dbContext.Categories.Where(p => p.Id == id).First();

            if (datos == null)
            {
                throw new Exception($"La categoria {id} no existe");
            }
            else
            {
                throw new Exception($"aca se cae todod");
            }

            return datos;

        }

        public async Task<IQueryable<Category>> ObtenerTodos()
        {
            try
            {
                IQueryable<Category> queryCartegory = _dbContext.Categories.Take(20);
                return queryCartegory;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
