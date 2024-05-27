using MediatR;
using Shared.MediatRImplement.Requests;

namespace Shared.MediatRImplement.Responses;
public record CartDetail(
    int ProductId,
    int Count
);