
using Cart.Domain.Repositories;
using Cart.Infrastructure.Persistence.MongoDB.Configuration;
using Cart.Infrastructure.Persistence.MongoDB.Driver;
using Cart.Infrastructure.Persistence.MongoDB.Driver.Configuration;
using Microsoft.Extensions.Configuration;

using Microsoft.Extensions.DependencyInjection;
using MongoDB.Driver;

namespace Cart.Infrastructure;
public static class DependencyInjection
{
    public static IServiceCollection AddShoppingCartInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddTransient<ICartProductRespository, MongoDBDriverCartProductRepository>();
        services.AddMongoDB(configuration);
        return services;
    }

    public static IServiceCollection AddMongoDB(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddSingleton<IMongoDatabase>(a =>
        {
            // Congiguracion de entidades
            CartProductConfiguration.Congiguracion();

            // Congiguracion de coneccion con MongoDB
            MongoDBConfiguration mongoDBSetting = new MongoDBConfiguration();
            configuration.Bind("MongoDBSettings", mongoDBSetting);
            var mongoClient = new MongoClient(mongoDBSetting.ConnectionString);
            return mongoClient.GetDatabase(mongoDBSetting.DatabaseName);
        });

        return services;
    }
}