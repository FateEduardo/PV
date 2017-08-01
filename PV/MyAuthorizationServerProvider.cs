using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using log4net;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;
using pv.Models.model;
using pv.Repository.Impl;
using PV.Service;

namespace pv
{
    public class MyAuthorizationServerProvider : OAuthAuthorizationServerProvider
    {

       private readonly AuthentificationComponent  _authentificationComponent = new AuthentificationComponent();

        private readonly UserRepositoryImpl _userRepository = new UserRepositoryImpl(new Context());
        
        private static readonly ILog log = LogManager.GetLogger(typeof(MyAuthorizationServerProvider));
            
        
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var identity = new ClaimsIdentity(context.Options.AuthenticationType);
            UserEntity user = _userRepository.FindByUserName(context.UserName);
         
            
            if (_authentificationComponent.IsAuthorized(user, context.Password))
            {
                
                log.Info("User login" + context.UserName);
                identity.AddClaim(new Claim(context.UserName, context.Password));
                identity.AddClaim(new Claim(ClaimTypes.Role,user.UserRole.RolName));
                identity.AddClaim(new Claim(ClaimTypes.Name, context.UserName));
                
                var props = new AuthenticationProperties(new Dictionary<string, string>
                {
                    {
                        "user", (context.UserName == null) ? string.Empty : context.UserName
                    }
                });
                
                var ticket = new AuthenticationTicket(identity, props);
                context.Validated(ticket);
            }
            else
            {
                context.SetError("invalid_grant", "error");
            }
            return;
        }
    }
}