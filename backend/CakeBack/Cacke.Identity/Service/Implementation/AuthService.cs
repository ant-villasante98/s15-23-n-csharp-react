using Cacke.Identity.Models;
using Cacke.Identity.Service.Contract;
using CakeBack.Models.Identity;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json.Linq;
using System.IdentityModel.Tokens.Jwt;


namespace Cacke.Identity.Service.Implementation
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly JwtSettings _jwtSettings;

        public AuthService(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, JwtSettings jwtSettings)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _jwtSettings = jwtSettings;
        }

        public async Task<AuthResponse> Login(AuthRequest request)
        {
            var user = await _userManager.FindByEmailAsync(request.Email);
            
            if (user == null)
            {
                throw new Exception($"El usuario con email{request.Email} no existe");

            }

            var result = await  _signInManager.PasswordSignInAsync(user.UserName, request.Password, false, lockoutOnFailure: false);

            if (!result.Succeeded) 
            {
                throw new Exception($"Las credenciales son Incorrectas");
            }

            var authResponse = new AuthResponse
            {
                Id = user.Id,
                Token = "", //new JwtSecurityTokenHandler().WriteToken(token),
                Email = user.Email,
                UserName = user.UserName,

            };

            return authResponse;
        }

        public async Task<RegistrationResponse> Register(RegistrationRequest request)
        {
            var existingUser = await _userManager.FindByNameAsync(request.Username);
            
            if (existingUser != null) 
            {
                throw new Exception($"El {request.Username} ya fue tomado por otro usuario");
            }

            var existingEmail = await _userManager.FindByEmailAsync(request.Email);

            if (existingEmail != null)
            {
                throw new Exception($"El {request.Email} ya fue tomado por otro usuario");
            }

            var user = new ApplicationUser
            {
                Email = request.Email,

                Nombre = request.Name,

                Apellidos = request.LastName,

                UserName = request.Username,

                EmailConfirmed = true

            };

            var result = await _userManager.CreateAsync(user, request.Password);
            if (result.Succeeded) 
            {
                await _userManager.AddToRoleAsync(user, "Operator");

                return new RegistrationResponse
                {
                    Email = user.Email,
                    
                    Token= "",

                    UserId = user.Id,

                    UserName= user.UserName,
                };

            }
            throw new Exception($"{result.Errors}");
        }
    }
}
