using System;
using System.Configuration;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Security.OAuth;
using System.Web.Http;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.DataHandler.Encoder;
using Microsoft.Owin.Security.Jwt;
using PV;


[assembly: OwinStartup(typeof(pv.Startup))]

namespace pv
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // Para obtener más información acerca de cómo configurar su aplicación, visite http://go.microsoft.com/fwlink/?LinkID=316888
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);

            var myProvider = new MyAuthorizationServerProvider();

            OAuthAuthorizationServerOptions options = new OAuthAuthorizationServerOptions
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/pv/token"),              
                RefreshTokenFormat = new CustomJwtFormat("Jugui Toño Systema"),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(5),
                RefreshTokenProvider = new MyAuthorizationServerProviderRefresh(),
                
                AccessTokenFormat = new CustomJwtFormat("http://localhost:8484"),
                Provider = myProvider
            };
              app.UseOAuthAuthorizationServer(options);

            HttpConfiguration config = new HttpConfiguration();
            ConfigureOAuthTokenConsumption(app);     

            WebApiConfig.Register(config);
        }

        private void ConfigureOAuthTokenConsumption(IAppBuilder app)
        {
            var issuer = "http://localhost:8484";
            
            string audienceId = ConfigurationManager.AppSettings["as:audienceId"];
            byte[] audienceSecret = TextEncodings.Base64Url.Decode(ConfigurationManager.AppSettings["as:AudienceSecret"]);
          
            app.UseJwtBearerAuthentication(
                new JwtBearerAuthenticationOptions
                {
                    AuthenticationMode = AuthenticationMode.Active,
                    AllowedAudiences = new[] { audienceId },
                    IssuerSecurityTokenProviders = new IIssuerSecurityTokenProvider[]
                    {
                        new SymmetricKeyIssuerSecurityTokenProvider(issuer, audienceSecret)
                    }
                });
        }
    }
}