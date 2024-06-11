using CackeBack.DAL.Orders;
using CakeBack.Models.Entidades;
using Microsoft.EntityFrameworkCore;

namespace CackeBack.DAL.Dbcontext
{
    public class CakeDbContext : DbContext
    {
        public CakeDbContext(DbContextOptions<CakeDbContext> options) : base(options)
        {
        }

        public DbSet<Category> categories { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }
        public DbSet<SubCategory> Subcategories { get; set; }
        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.ApplyConfiguration(new OrdersConfiguration());
        }
    }
}