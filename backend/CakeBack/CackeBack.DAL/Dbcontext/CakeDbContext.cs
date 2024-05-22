﻿using CakeBack.Models.Entidades;
using Microsoft.EntityFrameworkCore;


namespace CackeBack.DAL.Dbcontext
{
    public class CakeDbContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=TECNODEXDEV; Initial Catalog=Cake;user id=tecno;password=tecno; TrustServerCertificate=True")
            .LogTo(Console.WriteLine, new[] { DbLoggerCategory.Database.Command.Name }, Microsoft.Extensions.Logging.LogLevel.Information)
            .EnableSensitiveDataLogging();
        }

        public DbSet<Category> categories { get; set; }

    }
}
