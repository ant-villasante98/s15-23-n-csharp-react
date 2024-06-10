

namespace CakeBack.Models.Entity
{
    public class Extra
    {
        public int Id {get; set;}

        public string? Nombre{get; set;}

        public int ProductId { get; set;}

        public Product Product { get; set;}
    } 
}
