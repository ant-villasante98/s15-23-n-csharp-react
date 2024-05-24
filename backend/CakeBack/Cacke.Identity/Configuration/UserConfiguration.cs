using Cacke.Identity.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace Cacke.Identity.Configuration
{
    public class UserConfiguration : IEntityTypeConfiguration<ApplicationUser>
    {
        public void Configure(EntityTypeBuilder<ApplicationUser> builder)
        {
            var hasher = new PasswordHasher<ApplicationUser>();

            builder.HasData(
                    new ApplicationUser
                    {
                        Id = "3905e1ee-c377-47b8-a82d-8c86ee721551",
                        Email = "admin@localhost.com",
                        NormalizedEmail = "admin@localhost.com",
                        Nombre = "Deivison",
                        Apellidos = "Jimenez",
                        UserName = "DeivisonJimenez",
                        NormalizedUserName = "DeivisonJimenez",
                        PasswordHash = hasher.HashPassword(null, "Admin1234!"),
                        EmailConfirmed = true,

                    },
                    new ApplicationUser
                    {
                        Id = "0cf21943-5701-4f90-992e-d2ddbf2a8b12",
                        Email = "juandiego@localhost.com",
                        NormalizedEmail = "juandiego@localhost.com",
                        Nombre = "Juan",
                        Apellidos = "Diego",
                        UserName = "juandiego",
                        NormalizedUserName = "juandiego",
                        PasswordHash = hasher.HashPassword(null, "Admin1234!"),
                        EmailConfirmed = true,

                    }

                );
        }
    }
}
