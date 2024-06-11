using CackeBack.BLL.Interfaces;
using CackeBack.DAL.Interface;
using CakeBack.Models.Entidades;
using CakeBack.Models.MercadoPago;
using MercadoPago.Client.Preference;
using MercadoPago.Config;
using MercadoPago.Resource.Preference;
using Newtonsoft.Json;

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

        public Preference CreatePreference(Order order)
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
                NotificationUrl = "ngrokURL/api/MercadoPago/notifications"
            };

            foreach (var detail in order.OrderDetails)
            {
                request.Items.Add(new PreferenceItemRequest
                {
                    Title = "Product " + detail.ProductId,
                    Quantity = detail.Quantity,
                    CurrencyId = "ARS", // Change to your currency
                    UnitPrice = (decimal)detail.UnitPrice
                });
            }

            var client = new PreferenceClient();
            var preference = client.Create(request);
            order.MercadoPagoPreferenceId = preference.Id;
            Console.Write("hola");
            return preference;
        }

        public async Task HandleNotification(MercadoPagoNotification mpNotification)
        {
            if (mpNotification.Type == "payment")
            {
                var paymentInfo = await GetPaymentInfo(mpNotification.Data.Id);

                if (paymentInfo != null)
                {
                    await ProcessPaymentNotification(paymentInfo);
                }
            }
        }

        private async Task<MercadoPagoPaymentInfo> GetPaymentInfo(string id)
        {
            var url = $"https://api.mercadopago.com/v1/payments/{id}?access_token={MercadoPagoConfig.AccessToken}";
            var response = await _httpClient.GetAsync(url);

            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<MercadoPagoPaymentInfo>(content);
            }

            Console.WriteLine($"Failed to get payment info: {response.ReasonPhrase}");
            return null;
        }

        public async Task ProcessPaymentNotification(MercadoPagoPaymentInfo paymentInfo)
        {
            var order = await _orderRepository.GetOrderByPreferenceId(paymentInfo.PreferenceId);

            if (order != null)
            {
                switch (paymentInfo.Status)
                {
                    case "approved":
                        order.State = OrderState.Paid;
                        break;
                    case "pending":
                    case "in_process":
                        order.State = OrderState.Created;
                        break;
                    case "rejected":
                        order.State = OrderState.Canceled;
                        break;
                }

                await _orderRepository.Actualizar(order);
            }
        }

        public Task ProcessPaymentNotification(MercadoPagoNotification notification)
        {
            throw new NotImplementedException();
        }
    }
}