using System.Net.Http;
using System.Text;
using System.Web.Http.ExceptionHandling;
using log4net;
using log4net.Repository.Hierarchy;

namespace PV.Exceptions
{
    public class LoggerException: ExceptionLogger
    {
        private static ILog logger = 
            LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        
        public override void Log(ExceptionLoggerContext context)
        {
           logger.Error(context.Exception.InnerException.Message);
           
        }
        
       
    }
}