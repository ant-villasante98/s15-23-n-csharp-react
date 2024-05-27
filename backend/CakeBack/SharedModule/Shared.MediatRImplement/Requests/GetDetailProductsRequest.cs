using MediatR;
using Shared.MediatRImplement.Responses;

namespace Shared.MediatRImplement.Requests;

public record GetDetailProductsRequest(
    List<int> ProductIds
) : IRequest<List<ProductDetail>>;