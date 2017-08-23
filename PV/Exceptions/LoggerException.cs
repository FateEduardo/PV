using System.Web.Http.ExceptionHandling;

namespace PV.Exceptions
{
    public class LoggerException: ExceptionLogger
    {
        public override void Log(ExceptionLoggerContext context)
        {
            var log = context.Exception.ToString();
            //Do whatever logging you need to do here.
           
        }
    }
}