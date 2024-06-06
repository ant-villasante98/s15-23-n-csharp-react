using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CackeBack.DAL.Interface
{
     public interface IGenericRepository<TEntityModel> where TEntityModel : class
     {
            Task<bool> Insertar(TEntityModel modelo);

            Task<bool> Actualizar(int id, TEntityModel modelo);

            Task<bool> Eliminar(int id);

            Task<TEntityModel> Obtener(int id);

            Task<IQueryable<TEntityModel>> ObtenerTodos();
      }
}
