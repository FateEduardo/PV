using Microsoft.Owin.Security.OAuth;
using PV.Service;
using System.Security.Claims;
using System.Threading.Tasks;

namespace pv
{
    public class MyAuthorizationServerProvider : OAuthAuthorizationServerProvider
    {

       private AuthentificationService  autetificate = new AuthentificationService();


        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {

            autetificate.isAuthorized(context.UserName, context.Password);
            var identity = new ClaimsIdentity(context.Options.AuthenticationType);
            if (context.UserName == "test")
            {

                identity.AddClaim(new Claim(context.UserName, context.Password));
                identity.AddClaim(new Claim(ClaimTypes.Name, context.UserName));
                context.Validated(identity);
            }
            else
            {
                context.SetError("invalid_grant", "error");
            }
            return;
        }
    }
}