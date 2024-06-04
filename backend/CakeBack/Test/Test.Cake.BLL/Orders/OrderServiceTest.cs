using CackBack.BLL.Orders.Request;
using CackeBack.BLL.Services;
using CackeBack.DAL.Interface;
using CakeBack.Models.Entidades;
using MediatR;
using Shared.MediatRImplement.Notifications;

namespace Test.Cake.BLL.Orders;

public class OrderServiceTest
{
    [Fact]
    public async void Should_ReturnListOrdersByUser()
    {
        string userId = "user1";
        // Arrage
        IEnumerable<Order> ordersList = new List<Order>(){
            It.IsAny<Order>(),
            It.IsAny<Order>(),
            It.IsAny<Order>()
        };

        var mockOrderRepository = new Mock<IOrderRepository>();
        var mockMediator = new Mock<IMediator>();

        mockOrderRepository.Setup(x => x.FindByUserId(userId)).ReturnsAsync(ordersList);
        mockMediator.Setup(x => x.Publish(It.IsAny<OrderCreationCompleted>(), It.IsAny<CancellationToken>()));
        var orderService = new OrderService(mockOrderRepository.Object, mockMediator.Object);

        // Act

        var result = await orderService.GetByUser(userId);

        // Assert
        Assert.Equal(3, result.Count());
        Assert.NotEmpty(result);
        mockOrderRepository.Verify(x => x.FindByUserId(userId), Times.Once());
    }

    [Fact]
    public async void Should_RegisterOneOrder()
    {
        // Arrage
        string userId = "user1";
        int orderId = 4;


        Order ExpectedOrder = new Order(
            orderId, userId, DateTime.UtcNow, 3, OrderState.Created, new List<OrderDetail>(){
                It.IsAny<OrderDetail>(),
                It.IsAny<OrderDetail>(),
                It.IsAny<OrderDetail>()
            }
        );
        Order CatchOrder2 = It.IsAny<Order>();

        var mockMediator = new Mock<IMediator>();
        var mockOrderRepository = new Mock<IOrderRepository>();

        mockOrderRepository.Setup(r => r.Obtener(orderId)).ReturnsAsync(ExpectedOrder);

        var service = new OrderService(mockOrderRepository.Object, mockMediator.Object);

        // Act
        var order = await service.GetById(orderId);

        // Assert
        Assert.NotNull(order);
        Assert.IsType<int>(order.Id);
    }
    string userId = "user1";
    // Arrage
    [Fact]
    public async Task Should_ReturnOneOrderById()
    {
        string userId = "user1";
        // Arrage
        IEnumerable<Order> ordersList = new List<Order>(){
            It.IsAny<Order>(),
            It.IsAny<Order>(),
            It.IsAny<Order>()
        };

        var mockOrderRepository = new Mock<IOrderRepository>();
        var mockMediator = new Mock<IMediator>();


        mockOrderRepository.Setup(x => x.FindByUserId(userId)).ReturnsAsync(ordersList);
        var orderService = new OrderService(mockOrderRepository.Object, mockMediator.Object);

        // Act

        var result = await orderService.GetByUser(userId);

        // Assert
        Assert.Equal(3, result.Count());
        Assert.NotNull(result);
        mockOrderRepository.Verify(x => x.FindByUserId(userId), Times.Once());
    }
}