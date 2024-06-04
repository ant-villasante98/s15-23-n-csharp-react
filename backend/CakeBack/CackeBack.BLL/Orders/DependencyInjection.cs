using CackeBack.BLL.Interfaces;
using CackeBack.BLL.Services;
using CackeBack.DAL.Interface;
using CackeBack.DAL.Repositories;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Cart.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddOrders(this IServiceCollection services)
    {
        services.AddScoped<IOrderService, OrderService>();
        services.AddScoped<IOrderRepository, MockOrderRepository>();

        return services;
    }
}