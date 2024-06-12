using CackeBack.BLL.Interfaces;
using CackeBack.DAL.Interface;
using CakeBack.Models.Entidades;
using CakeBack.Models.MercadoPago;
using MercadoPago.Client.Payment;
using MercadoPago.Client.Preference;
using MercadoPago.Config;

namespace CackeBack.BLL.Services
{
    public class MercadoPagoService : IMercadoPagoService
    {
        private readonly IOrderRepository _orderRepository;
        private readonly HttpClient _httpClient;

        public MercadoPagoService(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
            _httpClient = new HttpClient();
            MercadoPagoConfig.AccessToken = ""; // Set your Mercado Pago access token
        }

        public async Task<string> CreatePreferenceAsync(Order order)
        {
            var request = new PreferenceRequest
            {
                Items = new List<PreferenceItemRequest>(),
                BackUrls = new PreferenceBackUrlsRequest
                {
                    Success = "https://localhost:7071/swagger/success.html",
                    Failure = "https://localhost:7071/swagger/failure.html",
                    Pending = "https://localhost:7071/swagger/pending.html"
                },
                AutoReturn = "approved",
                NotificationUrl = ""
            };

            foreach (var detail in order.OrderDetails)
            {
                request.Items.Add(new PreferenceItemRequest
                {
                    UnitPrice = (decimal)detail.UnitPrice,
                    Title = "Product " + detail.ProductId,
                    //Id = detail.Id.ToString(),
                    CurrencyId = "ARS", // Change to your currency
                    Quantity = detail.Quantity
                });
            }
            request.Payer = new PreferencePayerRequest()
            {
                Email = "test@test.com"
            };

            var client = new PreferenceClient();
            var preference = await client.CreateAsync(request);

            order.MercadoPagoPreferenceId = preference.Id;
            order.MercadoPagoInitPoint = preference.InitPoint;
            await _orderRepository.Actualizar(order);

            return preference.InitPoint;
        }


        public async Task HandleNotificationAsync(MercadoPagoNotification notification)
        {
            var client = new PaymentClient();
            var payment = await client.GetAsync(notification.Data.Id);

            var orderId = payment.Metadata != null ? payment.Metadata["order_id"].ToString() : null;

            if (orderId != null && int.TryParse(orderId, out int parsedOrderId))
            {
                var order = await _orderRepository.Obtener(parsedOrderId);

                if (order != null)
                {
                    if (payment.Status == "approved")
                    {
                        order.State = OrderState.Paid;
                        await _orderRepository.Actualizar(order);
                    }
                }
            }
        }
    }
}