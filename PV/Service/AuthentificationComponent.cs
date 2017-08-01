using pv.Models.model;
using pv.Repository;
using pv.Repository.Impl;
using System;

namespace PV.Service
{
    public class AuthentificationComponent
    {
               
        public bool IsAuthorized(UserEntity user, string password)
        {    
           return user != null && user.Password == password;
        }
        
    }
}