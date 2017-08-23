using System;
using System.Web;
using log4net;

namespace PV.Exceptions
{
    public class ControllerLogger <TController> where TController : class 
    {
        private readonly ILog log = LogManager.GetLogger(typeof(TController));

        private readonly string _username;
        private readonly string _controllerName;
        
       public  ControllerLogger(string controllerName)
       {
           this._username = HttpContext.Current.User.Identity.Name;;
           this._controllerName = controllerName;
       }
 
        public void LoggController( string ednPoint)
        {
            log.Info( "User :" + this._username + ", Controller :" + this._controllerName + ", End Point:" + ednPoint);
        }
    }
}