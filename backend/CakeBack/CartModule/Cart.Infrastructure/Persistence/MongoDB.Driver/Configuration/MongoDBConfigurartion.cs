namespace Cart.Infrastructure.Persistence.MongoDB.Configuration;
public class MongoDBConfiguration
{
    // docker run --rm -it -p27018:27017 --name CartProductDB -e MONGO_INITDB_ROOT_USERNAME=mongo -e MONGO_INITDB_ROOT_PASSWORD=password mongo
    public string ConnectionString { get; set; } = string.Empty;

    public string DatabaseName { get; set; } = string.Empty;
}