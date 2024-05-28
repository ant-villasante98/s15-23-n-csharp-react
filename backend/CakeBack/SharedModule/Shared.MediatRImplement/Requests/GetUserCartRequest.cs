using MediatR;
using Shared.MediatRImplement.Responses;

namespace Shared.MediatRImplement.Requests;

public record GetUserCartRequest(
    string UserId
) : IRequest<List<CartDetail>>;