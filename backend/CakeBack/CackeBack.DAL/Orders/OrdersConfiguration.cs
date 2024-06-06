using CakeBack.Models.Entidades;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CackeBack.DAL.Orders;

class OrdersConfiguration : IEntityTypeConfiguration<Order>
{
    public void Configure(EntityTypeBuilder<Order> builder)
    {
        builder.Property(x => x.State).HasConversion<int>();

        builder.Property(x => x.CreationDate);

        builder.HasMany(x => x.OrderDetails).WithOne().HasForeignKey(x => x.OrderId);

    }
}