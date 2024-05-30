using Cart.Application;
using Cart.Application.Request;
using Cart.Application.Response;
using Cart.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace CakeBack.WebAPI.Controllers;

[ApiController]
[Route("api/v1/shopping-carts")]
public class ShoppingCartsController(ICartProductService _cartProductService) : ControllerBase
{
    static private readonly string UserId = "user1";

    [HttpGet]
    public async Task<ActionResult<IEnumerable<CartProductResponse>>> GetCart()
    {
        List<CartProduct> products = await _cartProductService.GetCartByUserId(UserId);
        return Ok(
            products.Select(p => new CartProductResponse(p.ProductId, p.Name, p.Price, p.Count, p.Category, p.Image))
            );
    }

    [HttpPost("add-product")]
    public async Task<IActionResult> AddProduct(AddCartProductRequest productRequest)
    {
        await _cartProductService.AddProduct(
            UserId,
            CartProduct.Create(productRequest.Id, UserId, productRequest.Count, productRequest.Price, productRequest.Name, productRequest.Image, productRequest.Category)
            );
        return NoContent();
    }

    [HttpPatch("increase-product")]
    public async Task<IActionResult> IncreaseProduct(UpdateCartProductRequest productRequest)
    {
        await _cartProductService.IncreaseProduct(
            UserId, productRequest.Id, productRequest.Count
            );
        return NoContent();
    }

    [HttpPatch("decrease-product")]
    public async Task<IActionResult> DecreaseProduct(UpdateCartProductRequest productRequest)
    {
        await _cartProductService.DecreaseProduct(
            UserId, productRequest.Id, productRequest.Count
            );
        return NoContent();
    }

    [HttpDelete("delete-product/{productId}")]
    public async Task<IActionResult> DeleteProduct(int productId)
    {
        await _cartProductService.DeleteProduct(
            UserId,
            productId
            );
        return NoContent();
    }

    [HttpPost("to-empty")]
    public async Task<IActionResult> ToEmptyCart()
    {
        await _cartProductService.ToEmptyCartByUserId(
            UserId
            );
        return NoContent();
    }
}