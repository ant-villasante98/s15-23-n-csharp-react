using MediatR;
using Shared.MediatRImplement.Notifications;

namespace Cart.Application.Handlers;

internal class CartEmptyHandler : INotificationHandler<OrderCreationCompleted>
{
    public Task Handle(OrderCreationCompleted notification, CancellationToken cancellationToken)
    {
        _ = this.Processing();

        return Task.CompletedTask;
    }
    private async Task Processing()
    {
        await Task.Delay(5000);
        Console.WriteLine("Finalizacion de notificacion");
    }
}

internal class OtherHandler : INotificationHandler<OrderCreationCompleted>
{
    public Task Handle(OrderCreationCompleted notification, CancellationToken cancellationToken)
    {
        _ = this.Processing();

        return Task.CompletedTask;
    }
    private async Task Processing()
    {
        await Task.Delay(7000);
        Console.WriteLine("Finalizacion de notificacion de OtherHandler");
    }
}