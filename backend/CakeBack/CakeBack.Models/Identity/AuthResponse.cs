

namespace CakeBack.Models.Identity
{
    public class AuthResponse
    {
        public int Id { get; set; }

        public string UserName { get; set; }= string.Empty;

        public string Email {  get; set; }= string.Empty;

        public string Token { get; set; } = string.Empty;
    }
}
