using CackeBack.DAL.ExternalServices;
using CackeBack.DAL.Interface;
using CakeBck.Mocels;
using Microsoft.AspNetCore.Http;

namespace CackeBack.BLL;

public class ImageService(IImageProductRepository _imageProductRepository, IUploadImageService _uploadImageService)
{
    public async Task<ImageProduct> AgregarImagen(IFormFile file, int productoId)
    {
        var urlImage = await _uploadImageService.UploadImage(file);
        ImageProduct imageProduct = new ImageProduct()
        {
            Name = file.Name,
            Url = urlImage,
            Extention = file.ContentType,
            ProductoId = productoId
        };
        var image = await _imageProductRepository.Create(imageProduct);
        return image;
    }
}