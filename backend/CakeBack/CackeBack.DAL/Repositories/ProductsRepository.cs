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
    public class ProductsRepository : IGenericRepository<Product>
    {
        private readonly CakeDbContext _dbContext;

        public ProductsRepository(CakeDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<bool> Insertar(Product modelo)
        {
            try
            {
                
                var exist = await _dbContext.Products.Where(p => p.Id== modelo.Id).FirstAsync();
                
                if(exist != null) 
                {
                    throw new Exception($"El producto ya existe{modelo.Name}");
                }

                _dbContext.Add(modelo);
                await _dbContext.SaveChangesAsync();


                return true;
                
            }catch(Exception ex) 
            {
                throw new Exception($"el producto tiene un problema {modelo.Name}");
                
            }
        }

        public async Task<bool> Actualizar(int id, Product modelo)
        {
            try
            {

                var datos = await _dbContext.Products.Where(p => p.Id == id).FirstAsync();

                if (datos != null)
                {
                    throw new Exception($"El producto ya existe{modelo.Name}");
                }

                datos.Name= modelo.Name;

                datos.Description = modelo.Description;

                datos.CategoryId = modelo.CategoryId;

                datos.SubCategoryId = modelo.SubCategoryId;

                datos.precio = modelo.precio;

                datos.Stock = modelo.Stock;


                _dbContext.Update(datos);
                
                await _dbContext.SaveChangesAsync();


                return true;

            }
            catch (Exception ex)
            {
                throw new Exception($"el producto tiene un problema {modelo.Name}");

            }
        }

        public async Task<bool> Eliminar(int id)
        {
            try
            {

                var datos = await _dbContext.Products.Where(p => p.Id == id).FirstAsync();

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


        public async Task<Product> Obtener(int id)
        {
            var datos = await _dbContext.Products.Where(p => p.Id == id).FirstAsync();

            if (datos == null)
            {
                throw new Exception($"El producto no existe{id}");
            }

            return datos;
        }

        public async Task<IQueryable<Product>> ObtenerTodos()
        {
            try
            {
                IQueryable<Product> queryProduct = _dbContext.Products.Take(20);
                return queryProduct;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
