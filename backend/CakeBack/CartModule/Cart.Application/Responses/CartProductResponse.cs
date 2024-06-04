namespace Cart.Application.Response;

public record CartProductResponse(
    int ProductId,
    string ProductName,
    double Price,
    int Count,
    string Category,
    string Image
);