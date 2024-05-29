using CackeBack.DAL.Dbcontext;
using CackeBack.DAL.Interface;
using CakeBack.Models.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CackeBack.DAL.Repository
{
    public class CategoryRepository : IGenericRepository<Category>
    {
        private readonly CakeDbContext _dbcontext;

        public CategoryRepository(CakeDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public Task<bool> Insertar(Category modelo)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Actualizar(int id, Category modelo)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Eliminar(int id)
        {
            throw new NotImplementedException();
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
