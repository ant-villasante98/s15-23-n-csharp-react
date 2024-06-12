using CakeBack.Models.Entidades;
using CakeBack.Models.MercadoPago;

namespace CackeBack.BLL.Interfaces
{
    public interface IMercadoPagoService
    {
        Task<string> CreatePreferenceAsync(Order order);
        Task HandleNotificationAsync(MercadoPagoNotification notification);

    }
}
