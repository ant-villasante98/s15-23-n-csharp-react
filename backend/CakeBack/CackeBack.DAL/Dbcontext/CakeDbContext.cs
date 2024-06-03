using CackeBack.DAL.Orders;
using CakeBack.Models.Entidades;
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
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.ApplyConfiguration(new OrdersConfiguration());
        }
<<<<<<< HEAD

        public DbSet<SubCategory> Subcategories { get; set; }

        public DbSet<Product> Products { get; set; }


=======
>>>>>>> e3be572 (configuracion de ef para Orders)

    }
}
