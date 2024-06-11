using CakeBack.Models.Entidades;
using CakeBack.Models.MercadoPago;
using MercadoPago.Resource.Preference;

namespace CackeBack.BLL.Interfaces
{
    public interface IMercadoPagoService
    {
        Preference CreatePreference(Order order);
        Task ProcessPaymentNotification(MercadoPagoNotification notification);
        Task HandleNotification(MercadoPagoNotification notification);
    }
}
