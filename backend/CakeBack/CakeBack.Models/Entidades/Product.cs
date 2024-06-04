using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeBack.Models.Entidades
{
    public class Product
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int CategoryId { get; set; }

        public virtual ICollection<Category>? Categories { get; set; }

        public int SubCategoryId { get; set; }

        public virtual ICollection<SubCategory>? SubCategory { get; set; }

        public decimal precio { get; set; }

        public int Stock { get; set; }
    }
}
