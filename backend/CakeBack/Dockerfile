FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src
COPY . .

RUN dotnet restore
COPY . .
RUN dotnet publish CackeBack.WebAPI/CackeBack.API.csproj -c Release -o /Out

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS rumetime

WORKDIR /app
COPY --from=build /Out .
EXPOSE 8080

ENTRYPOINT [ "dotnet", "CackeBack.API.dll" ]
