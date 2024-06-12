using CackeBack.BLL.Interfaces;
using CakeBack.Models.Entidades;
using CakeBack.Models.MercadoPago;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace CackeBack.API.Controllers
{
    [EnableCors("ReglasCors")]
    [Route("api/mercadopago")]
    [ApiController]
    public class MercadoPagoController : ControllerBase
    {
        private readonly IMercadoPagoService _mercadoPagoService;

        public MercadoPagoController(IMercadoPagoService mercadoPagoService)
        {
            _mercadoPagoService = mercadoPagoService;
        }

        [HttpPost("crear-preferencia")]
        public async Task<IActionResult> CrearPreferencia([FromBody] Order order)
        {
            try
            {
                var initPoint = await _mercadoPagoService.CreatePreferenceAsync(order);
                return Ok(new { initPoint });
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Error interno del servidor");
            }
        }

        [HttpPost("notifications")]
        public async Task<IActionResult> ReceiveNotification([FromBody] MercadoPagoNotification notification)
        {
            try
            {
                System.Diagnostics.Debug.WriteLine(notification.ToString());
                await _mercadoPagoService.HandleNotificationAsync(notification);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Error interno del servidor");
            }
        }
    }
}
