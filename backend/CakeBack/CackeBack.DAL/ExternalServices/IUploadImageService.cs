using Microsoft.AspNetCore.Http;

namespace CackeBack.DAL.ExternalServices;

public interface IUploadImageService
{
    Task<string> UploadImage(IFormFile file);
}