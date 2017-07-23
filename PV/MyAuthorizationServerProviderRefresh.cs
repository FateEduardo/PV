using Microsoft.Owin.Security.Infrastructure;
using System;
using System.Threading.Tasks;

namespace pv
{
    public class MyAuthorizationServerProviderRefresh : IAuthenticationTokenProvider
    {
        private int expiration = 5;
        public void Create(AuthenticationTokenCreateContext context)
        {
            
            context.Ticket.Properties.ExpiresUtc = new DateTimeOffset(DateTime.Now.AddMinutes(expiration));
            context.SetToken(context.SerializeTicket());
        }

        public async Task CreateAsync(AuthenticationTokenCreateContext context)
        {
            Create(context);
        }

        public void Receive(AuthenticationTokenReceiveContext context)
        {
            context.DeserializeTicket(context.Token);

            if (context.Ticket == null)
            {
                context.Response.StatusCode = 400;
                context.Response.ContentType = "application/json";
                context.Response.ReasonPhrase = "invalid token";
                return;
            }

            if (context.Ticket.Properties.ExpiresUtc <= DateTime.UtcNow)
            {
                context.Response.StatusCode = 401;
                context.Response.ContentType = "application/json";
                context.Response.ReasonPhrase = "unauthorized";
                return;
            }

            context.Ticket.Properties.ExpiresUtc = DateTime.UtcNow.AddMinutes(expiration);
            context.SetTicket(context.Ticket);
        }

        public async Task ReceiveAsync(AuthenticationTokenReceiveContext context)
        {
            Receive(context);

        }
    }
}