
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Cart.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddShoppingCartApplication(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddScoped<ICartProductService, CartProductService>();

        return services;
    }
}