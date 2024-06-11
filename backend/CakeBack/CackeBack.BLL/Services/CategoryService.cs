using CackeBack.BLL.Interfaces;
using CackeBack.DAL.Repository.Contract;
using CackeBack.DAL.Repository.Implement;
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

        public CategoryService(IGenericRepository<Category> CategoryRepo)
        {
            _CategoryRepo = CategoryRepo;
        }

        public async Task<bool> Insertar(Category modelo)
        {
            return await _CategoryRepo.Insertar(modelo);
        }

        public async Task<bool> Actualizar(int id, Category modelo)
        {
            return await _CategoryRepo.Actualizar(id, modelo);
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _CategoryRepo.Eliminar(id);
        }


        public async Task<Category> Obtener(int id)
        {
            try
            {
                return await _CategoryRepo.Obtener(id);

            }
            catch (Exception)
            {
                throw;
            }

            
        }

        public async Task<IQueryable<Category>> ObtenerTodos()
        {
            return await _CategoryRepo.ObtenerTodos();
        }
    }
}
