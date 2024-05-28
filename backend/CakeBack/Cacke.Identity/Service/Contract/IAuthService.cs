using CakeBack.Models.Identity;


namespace Cacke.Identity.Service.Contract
{
    public interface IAuthService
    {
        Task<AuthResponse>Login(AuthRequest request);

        Task<RegistrationResponse>Register(RegistrationRequest request);
    }
}
