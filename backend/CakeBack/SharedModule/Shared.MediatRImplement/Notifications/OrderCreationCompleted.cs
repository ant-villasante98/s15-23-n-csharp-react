using MediatR;

namespace Shared.MediatRImplement.Notifications;

public record OrderCreationCompleted() : INotification;