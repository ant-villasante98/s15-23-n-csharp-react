namespace Cart.Application.Request;

public record AddCartProductRequest(
    int Id,
    int Count,
    double Price,
    string Name,
    string Image,
    string Category
);