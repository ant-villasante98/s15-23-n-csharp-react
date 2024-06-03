using Cart.Application;
using MediatR;
using Shared.MediatRImplement.Notifications;

namespace Cart.Infrastructure.Handlers;

internal class CartEmptyHandler(ICartProductService _cartProductService) : INotificationHandler<OrderCreationCompleted>
{
    public Task Handle(OrderCreationCompleted notification, CancellationToken cancellationToken)
    {
        _ = _cartProductService.ToEmptyCartByUserId(notification.UserId);

        return Task.CompletedTask;
    }
}

