using System;
using System.Data.Entity;
using pv.Models.model;
using pv.Repository.Abstract.Repository;

namespace pv.Repository.Impl
{
    public class UserRepositoryImpl : CRUDRepository<UserEntity>, IUserRepository
    {
        public UserRepositoryImpl(DbContext context) : base(context)
        {
        }

        public override int count()
        {
            return 0;
        }
    }
}