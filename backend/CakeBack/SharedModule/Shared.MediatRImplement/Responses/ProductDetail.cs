namespace Shared.MediatRImplement.Responses;

public record ProductDetail(
    int Id,
    string Name,
    double Price,
    string Detail,
    string ImageUrl
);