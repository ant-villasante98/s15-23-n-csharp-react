using CackeBack.BLL.Interfaces;
using CackeBack.DAL.Execptions;
using CakeBack.Models.Entity;
using CakeBack.Models.VModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CackeBack.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        public readonly ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet("Categoria_por_Codigo")]
        public async Task<ActionResult<VMCategory>> ListId(int id)
        {
            try
            {
                var categoria = await _categoryService.Obtener(id);

                return Ok(categoria);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {

                return StatusCode(500, "Error interno del servidor");
            }
        }
    }
}
