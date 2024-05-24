using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace Cacke.Identity.Configuration
{
    public class RoleConfiguration : IEntityTypeConfiguration<IdentityRole>
    {
        public void Configure(EntityTypeBuilder<IdentityRole> builder)
        {
            builder.HasData(
                 new IdentityRole
                 {
                     Id = "2a002975-39da-45fc-8f0d-ba55a1358f9e",
                     Name = "Administrator",
                     NormalizedName = "ADMINISTRATOR"


                 },
                 new IdentityRole
                 {
                     Id = "c8748260-4ec7-435c-86e4-57c56918dfb3",
                     Name = "Operator",
                     NormalizedName = "OPERATOR"


                 }


                );
        }
    }
}
