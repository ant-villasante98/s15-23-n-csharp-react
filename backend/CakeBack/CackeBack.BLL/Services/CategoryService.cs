using CackeBack.BLL.Interfaces;
using CakeBack.Models.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CackeBack.BLL.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly IGenericRepository<Category> _CategoryRepo;

        public Task<bool> Actualizar(int id, Category modelo)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Eliminar(int id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Insertar(Category modelo)
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
