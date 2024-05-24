namespace Cart.Application.Request;

public record UpdateCartProductRequest(
    int Id,
    int Count
);