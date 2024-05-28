using CackeBack.BLL;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Shared.MediatRImplement.Requests;
using Shared.MediatRImplement.Responses;

namespace CackeBack.WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly MockService _mockService;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, MockService mockService)
        {
            _logger = logger;
            _mockService = mockService;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpGet("cart-details")]
        public async Task<ActionResult<List<CartDetail>>> GetCartDetails()
        {
            var response = await _mockService.GetCartDetails("user1");
            return Ok(response);
        }
    }
}
