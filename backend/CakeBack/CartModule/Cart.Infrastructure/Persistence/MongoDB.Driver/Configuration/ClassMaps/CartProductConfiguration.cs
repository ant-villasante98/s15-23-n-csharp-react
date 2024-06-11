using Cart.Domain.Models;
using Cart.Infrastructure.Persistence.MongoDB.Driver.Configuration.Serializers;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Serializers;

namespace Cart.Infrastructure.Persistence.MongoDB.Driver.Configuration;

public static class CartProductConfiguration
{
    public static void Congiguracion()
    {
        BsonClassMap.RegisterClassMap<CartProduct>(cm =>
        {
            cm.AutoMap();
            cm.SetIgnoreExtraElements(false);

            cm.MapIdMember(c => c.Id).SetSerializer(new CartProductIdSerializer());
            cm.MapMember(c => c.Count);
            cm.MapMember(c => c.UserId);
            cm.MapMember(c => c.ProductId);
            cm.MapMember(c => c.Name);
            cm.MapMember(c => c.Image);
            cm.MapMember(c => c.Price);
            cm.MapMember(c => c.Category);
        });
    }
}