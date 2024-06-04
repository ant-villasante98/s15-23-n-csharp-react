using CakeBck.Mocels;

namespace CackeBack.DAL.Interface;
public interface IImageProductRepository
{
    Task<ImageProduct> Create(ImageProduct image);
}