using CackeBack.BLL.Interfaces;
using CackeBack.BLL.Services;
using CackeBack.DAL.Dbcontext;
using CackeBack.DAL.Repository.Contract;
using CackeBack.DAL.Repository.Implement;
using CakeBack.Models.Entity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<CakeDbContext>(options =>

    options.UseSqlServer(builder.Configuration.GetConnectionString("cadenaSQL"))

);


//Cors
var MisReglasCors = "ReglasCors";
builder.Services.AddCors(opt =>

    opt.AddPolicy(name: MisReglasCors, builder =>
    {
        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();

       
    })

);
//Inyeccion de dependencia
//Categoria
builder.Services.AddScoped<IGenericRepository<Category>, CatetoryRepository>();
builder.Services.AddScoped<ICategoryService, CategoryService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(MisReglasCors);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
