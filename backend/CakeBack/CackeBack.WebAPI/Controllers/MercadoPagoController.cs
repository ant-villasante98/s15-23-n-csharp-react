using CackeBack.BLL.Interfaces;
using CakeBack.Models.MercadoPago;
using Microsoft.AspNetCore.Mvc;

namespace CackeBack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MercadoPagoController : ControllerBase
    {
        private readonly IMercadoPagoService _mercadoPagoService;

        public MercadoPagoController(IMercadoPagoService mercadoPagoService)
        {
            _mercadoPagoService = mercadoPagoService;
        }

        [HttpPost]
        [Route("notifications")]
        public async Task<IActionResult> MercadoPagoNotification([FromBody] MercadoPagoNotification notification)
        {
            Console.Clear();
            Console.WriteLine($"Received notification: ID = {notification.Id}, Type = {notification.Type}");

            await _mercadoPagoService.HandleNotification(notification);

            return Ok();
        }
    }
}
