using CackeBack.DAL.Interface;
using CakeBck.Mocels;

namespace CackeBack;

public class MockImageRepository : IImageProductRepository
{
    private List<ImageProduct> ListImage = new List<ImageProduct>();
    public Task<ImageProduct> Create(ImageProduct image)
    {
        return Task.Run(() =>
        {
            image.Id = ListImage.Count + 1;
            ListImage.Add(image);
            return image;
        });
    }
}