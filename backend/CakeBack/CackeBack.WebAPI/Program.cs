using Cacke.Identity;
using CackeBack.DAL.Dbcontext;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Cart.Application;
using Cart.Infrastructure;
using Shared.MediatRImplement;
using CackeBack.BLL;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.ConfigureIdentityServices(builder.Configuration);

builder.Services.AddCors(option =>
    {
        option.AddPolicy("CorsPolicy", builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());


    });

//Configuracion para validar el Token


builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header
    });

    options.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type= ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },

            new string[] {}

        }





    });
});

//


// CartModule Extentions 
builder.Services.AddShoppingCartApplication(builder.Configuration);
builder.Services.AddShoppingCartInfrastructure(builder.Configuration);

// Mediatr configuration
builder.Services.AddMediatR(config =>
{
    config.RegisterServicesFromAssemblyContaining<CartInfrastructureAssemblyReference>();
    // config.RegisterServicesFromAssemblyContaining<MediatRImplementAssemblyRegerence>();
});

// Mock 
builder.Services.AddScoped<MockService>();


var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseAuthentication();

app.UseCors("CorsPolicy");

app.MapControllers();

app.Run();
