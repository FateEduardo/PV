using System;
using System.Configuration;
using System.IdentityModel.Tokens;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.DataHandler.Encoder;
using pv.Models.model;
using pv.Repository.Impl;
using Thinktecture.IdentityModel.Tokens;

namespace PV
{
    public class CustomJwtFormat:ISecureDataFormat<AuthenticationTicket>
    {
        private const string UserKey = "audienceId";
        private const string UserKeypas = "password";
        
        private readonly UserRepositoryImpl _userRepositoryImpl = new UserRepositoryImpl(new Context());
        
        private readonly string _issuer = string.Empty;
        
        public string SignatureAlgorithm
        {
            get { return "http://www.w3.org/2001/04/xmldsig-more#hmac-sha256"; }//oauth jwt(java web token)
        }
 
        public string DigestAlgorithm
        {
            get { return "http://www.w3.org/2001/04/xmlenc#sha256"; }
        }

        public CustomJwtFormat(string issuer)
        {
            _issuer = issuer;
        }

        public string Protect(AuthenticationTicket data)
        {
            if (data == null)
            {
                throw new ArgumentNullException("user");
            }

            string userName = data.Properties.Dictionary.ContainsKey(UserKey) ? data.Properties.Dictionary[UserKey] : null;
            string password = data.Properties.Dictionary.ContainsKey(UserKeypas) ? data.Properties.Dictionary[UserKey] : null;

            if (string.IsNullOrWhiteSpace(userName)) throw new InvalidOperationException("AuthenticationTicket.Properties does not include audience");

            UserEntity audience = _userRepositoryImpl.FindByUserName(userName);
            string symmetricKeyAsBase64 = ConfigurationManager.AppSettings["as:AudienceSecret"];
            var keyByteArray = TextEncodings.Base64Url.Decode(symmetricKeyAsBase64);

            var signingKey = new HmacSigningCredentials(keyByteArray);
       

            try
            {
                
           

            var issued = data.Properties.IssuedUtc;
            var expires = data.Properties.ExpiresUtc;
              /*  var signingCredentials = new SigningCredentials(
                    new InMemorySymmetricSecurityKey(keyByteArray), 
                    SignatureAlgorithm,
                    DigestAlgorithm);*/
            string audienceId = ConfigurationManager.AppSettings["as:AudienceId"];    
            var token = new JwtSecurityToken(_issuer,audienceId , data.Identity.Claims, issued.Value.UtcDateTime, expires.Value.UtcDateTime, signingKey);

            var handler = new JwtSecurityTokenHandler();

            var jwt = handler.WriteToken(token);

            return jwt;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public AuthenticationTicket Unprotect(string protectedText)
        {
            throw new NotImplementedException();
        }
        
    }
}