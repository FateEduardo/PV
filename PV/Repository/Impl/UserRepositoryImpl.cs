using System;
using System.Data.Entity;
using System.Linq;
using pv.Models.model;
using pv.Repository.Abstract.Repository;

namespace pv.Repository.Impl
{
    public class UserRepositoryImpl : CRUDRepository<UserEntity>, IUserRepository
    {
        private readonly Context _context;
        
        public UserRepositoryImpl(DbContext context) : base(context)
        {
            _context = new Context();
        }

    

        public override int count()
        {

            return 0;
        }

        public UserEntity FindByUserName(string userName)
        {
           
            var usuario = from u in _context.USERs
                where u.UserName == userName
                select u;
            
            try
            {
                return usuario.First<UserEntity>();
            }
            catch (Exception e)
            {
                return null;
            }    
           
        }
    }
}