using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Security.OAuth;
using System.Web.Http;
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
                
                AccessTokenFormat = new CustomJwtFormat("Jugui Toño Systema"),
                Provider = myProvider
            };
              app.UseOAuthAuthorizationServer(options);

            HttpConfiguration config = new HttpConfiguration();
            WebApiConfig.Register(config);
        }
    }
}