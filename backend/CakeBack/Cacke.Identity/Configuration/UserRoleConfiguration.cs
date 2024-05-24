using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace Cacke.Identity.Configuration
{
    internal class UserRoleConfiguration : IEntityTypeConfiguration<IdentityUserRole<string>>
    {
        public void Configure(EntityTypeBuilder<IdentityUserRole<string>> builder)
        {
            builder.HasData(
                   new IdentityUserRole<string>
                   {

                       RoleId = "2a002975-39da-45fc-8f0d-ba55a1358f9e",
                       UserId = "3905e1ee-c377-47b8-a82d-8c86ee721551"

                   },
                   new IdentityUserRole<string>
                   {
                       RoleId = "c8748260-4ec7-435c-86e4-57c56918dfb3",
                       UserId = "0cf21943-5701-4f90-992e-d2ddbf2a8b12"
                   }
              );
        }
    }
}
