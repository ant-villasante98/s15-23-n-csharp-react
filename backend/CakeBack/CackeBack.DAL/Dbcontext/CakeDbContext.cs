
using CakeBack.Models.Entity;
using Microsoft.EntityFrameworkCore;

namespace CackeBack.DAL.Dbcontext
{
    public class CakeDbContext : DbContext
    {

        public CakeDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Category>?Categories { get; set; }

        public DbSet<SubCategory>? SubCategories { get; set; }

        public DbSet<Extra>? Extras { get; set; }

        public DbSet<Product>? Products { get; set; }

    }

    



}
