using Cacke.Identity.Configuration;
using Cacke.Identity.Models;
using CakeBack.Models.Entidades;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Task.Identity.Configuration;


namespace Cacke.Identity
{
    public class CakeIdentityDbContext : IdentityDbContext<ApplicationUser>
    {
        public CakeIdentityDbContext(DbContextOptions<CakeIdentityDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ApplyConfiguration(new RoleConfiguration());
            builder.ApplyConfiguration(new UserConfiguration());
            builder.ApplyConfiguration(new UserRoleConfiguration());
        }

        public DbSet<Data> Data { get; set; }
    }
}
