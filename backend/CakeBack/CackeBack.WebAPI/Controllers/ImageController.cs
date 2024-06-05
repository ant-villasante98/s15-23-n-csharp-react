using CackeBack.BLL;
using Microsoft.AspNetCore.Mvc;

namespace CackeBack.API.Controllers;

[ApiController]
[Route("api/v1/images")]
public class ImageController(ImageService _imageService) : ControllerBase
{
    [HttpPost]
    public async Task<ActionResult<string>> Create([FromForm] CreateImage imageDto)
    {
        var urlImage = await _imageService.AgregarImagen(imageDto.Image, 1);
        return Ok(urlImage);
    }
}
public record CreateImage(
    IFormFile Image
);