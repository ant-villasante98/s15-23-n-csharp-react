using Cart.Domain.Models;
using MediatR;
using Shared.MediatRImplement.Requests;
using Shared.MediatRImplement.Responses;

namespace Cart.Application.Handlers;

internal class GetUserCartRequestHandler(ICartProductService _cartProductService) : IRequestHandler<GetUserCartRequest, List<CartDetail>>
{
    public async Task<List<CartDetail>> Handle(GetUserCartRequest request, CancellationToken cancellationToken)
    {
        List<CartProduct> cartProducts = await _cartProductService.GetCartByUserId(request.UserId);
        return cartProducts.Select(p => new CartDetail(p.ProductId, p.Count)).ToList();
    }
}