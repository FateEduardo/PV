using pv.Models.model;
using pv.Repository;
using pv.Repository.Impl;
using System;

namespace PV.Service
{
    public class AuthentificationService
    {
        private readonly UserRepositoryImpl userRepository;

        public AuthentificationService()
        {
            userRepository = new UserRepositoryImpl(new Context());
        }
        public bool isAuthorized(string username, string password)
        {
    
               UserEntity user = userRepository.FindById(1);
            try
            {
                UserRolEntity userRole = user.userRole;
            }
            catch(Exception ex)
            {
                return true;
            }

            return true;

        }

    }
}