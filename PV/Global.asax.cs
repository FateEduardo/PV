using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;

namespace pv
{
    public class WebApiApplication : HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            
            log4net.Config.XmlConfigurator.Configure();
          //  NinjectWebCommon.Start();
        }


    }
}
