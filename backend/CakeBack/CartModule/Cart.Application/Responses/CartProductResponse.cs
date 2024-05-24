namespace Cart.Application.Response;

public record CartProduct(
    int ProductId,
    string ProductName,
    double Price
);