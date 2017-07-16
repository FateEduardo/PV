using System;
using System.Data.Entity;
using PV.Models.model;
using PV.Repository.Abstract.Repository;

namespace PV.Repository.Impl
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