using Cacke.Identity.Configuration;
using Cacke.Identity.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;


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
    }
}
