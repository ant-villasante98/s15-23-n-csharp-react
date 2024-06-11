using CakeBack.Models.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CackeBack.BLL.Interfaces
{
    public interface ICategoryService
    {
        Task<bool> Insertar(Category modelo);

        Task<bool> Actualizar(int id, Category modelo);

        Task<bool> Eliminar(int id);

        Task<Category> Obtener(int id);

        Task<IQueryable<Category>> ObtenerTodos();
    }
}
