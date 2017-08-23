using System.Collections.Generic;
using System.Linq;
using pv.Models.model;
using pv.Repository.Impl;

namespace PV.Service
{
    public class SCategoryService
    {
        private readonly SCategoryRepositoryImpl _sCategoryRepositoryImpl;

        public SCategoryService()
        {
            _sCategoryRepositoryImpl = new SCategoryRepositoryImpl(new Context());
        }

        public List<SuperCategoryEntity> GetSuperCategoryEntities()
        {
            return _sCategoryRepositoryImpl.FindAll().ToList();
        }
    }
}