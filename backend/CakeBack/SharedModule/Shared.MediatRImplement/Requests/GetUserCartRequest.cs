using MediatR;
using Shared.MediatRImplement.Responses;

namespace Shared.MediatRImplement.Requests;

public record GetUserCartRequest(
    int UserId
) : IRequest<List<CartDetail>>;