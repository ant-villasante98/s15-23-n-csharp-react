

namespace CakeBack.Models.Entity
{
    public class Product
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public string Description { get; set; }

        public int CategoryId { get; set; }

        public virtual Category Categories { get; set; }

        public int SubCategoryId { get; set; }

        public virtual SubCategory? SubCategory { get; set; }

        public decimal precio { get; set; }

        public int Stock { get; set; }
    }
}
