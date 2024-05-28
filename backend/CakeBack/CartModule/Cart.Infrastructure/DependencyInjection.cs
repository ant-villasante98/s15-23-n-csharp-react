
using Cart.Domain.Repositories;
using Cart.Infrastructure.Persistence.MongoDB;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Cart.Infrastructure;
public static class DependencyInjection
{
    public static IServiceCollection AddShoppingCartInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddTransient<ICartProductRespository, MockCartRepository>();
        return services;
    }
}