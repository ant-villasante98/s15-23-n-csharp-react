using Cart.Domain.Models;
using Cart.Domain.Repositories;
using MongoDB.Driver;

namespace Cart.Infrastructure.Persistence.MongoDB.Driver;

public class MongoDBDriverCartProductRepository : ICartProductRespository
{
    private readonly string _collectionName = "CartProducts";
    private readonly IMongoCollection<CartProduct> _cartProductCollection;
    private readonly FilterDefinitionBuilder<CartProduct> _filterBuilder = Builders<CartProduct>.Filter;

    public MongoDBDriverCartProductRepository(IMongoDatabase mongoDatabase)
    {
        _cartProductCollection = mongoDatabase.GetCollection<CartProduct>(_collectionName) ?? throw new ArgumentNullException("Error connection MongoDB");
    }

    public async Task AddAsync(CartProduct cartProduct)
    {
        await _cartProductCollection.InsertOneAsync(cartProduct);
    }

    public async Task DeleteAsync(CartProduct cartProduct)
    {
        await DeleteAsync(cartProduct.Id);
    }

    public async Task DeleteAsync(Guid cartProductId)
    {
        var filter = _filterBuilder.Eq(p => p.Id, cartProductId);
        await _cartProductCollection.DeleteOneAsync(filter);
    }

    public async Task DeleteManyByUserIdAsync(int userId)
    {
        var filter = _filterBuilder.Eq(p => p.UserId, userId);
        await _cartProductCollection.DeleteManyAsync(filter);
    }

    public async Task<CartProduct?> FindByProductIdAndUserIdAsync(int userId, int productId)
    {
        var filter = _filterBuilder.Eq(p => p.UserId, userId) & _filterBuilder.Eq(p => p.ProductId, productId);
        return await _cartProductCollection.Find(filter).FirstOrDefaultAsync();
    }

    public async Task<List<CartProduct>> FindByUserIdAsync(int userId)
    {
        var filter = _filterBuilder.Eq(p => p.UserId, userId);
        return await _cartProductCollection.Find(filter).ToListAsync();
    }

    public async Task UpdateAsync(CartProduct cartProduct)
    {
        var filter = _filterBuilder.Eq(p => p.Id, cartProduct.Id);
        var result = await _cartProductCollection.ReplaceOneAsync(filter, cartProduct);
    }
}