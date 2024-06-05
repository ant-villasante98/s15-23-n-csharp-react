using CackeBack.DAL.Dbcontext;
using CackeBack.DAL.Interface;
using CakeBck.Mocels;
using Microsoft.EntityFrameworkCore;

namespace CackeBack.BLL;
public class ImageProductRepository(CakeDbContext _context) : IImageProductRepository
{
    public async Task<ImageProduct> Create(ImageProduct image)
    {
        _context.ImageProducts.Add(image).State = EntityState.Added;
        await _context.SaveChangesAsync();
        return image;
    }
}