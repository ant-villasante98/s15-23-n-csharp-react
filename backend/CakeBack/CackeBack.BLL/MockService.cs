using MediatR;
using Shared.MediatRImplement.Notifications;
using Shared.MediatRImplement.Requests;
using Shared.MediatRImplement.Responses;

namespace CackeBack.BLL;

public class MockService(IMediator _mediator)
{
    public async Task<List<CartDetail>> GetCartDetails(string Id)
    {
        await _mediator.Publish(new OrderCreationCompleted(Id));
        var response = await _mediator.Send(new GetUserCartRequest(Id));
        return response;
    }
}