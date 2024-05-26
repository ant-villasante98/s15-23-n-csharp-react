using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Serializers;

namespace Cart.Infrastructure.Persistence.MongoDB.Driver.Configuration.Serializers;

public class CartProductIdSerializer : SerializerBase<Guid>
{
    public override void Serialize(BsonSerializationContext context, BsonSerializationArgs args, Guid value)
    {
        context.Writer.WriteString(value.ToString());
    }

    public override Guid Deserialize(BsonDeserializationContext context, BsonDeserializationArgs args)
    {
        var stringValue = context.Reader.ReadString();
        return Guid.Parse(stringValue);
    }
}