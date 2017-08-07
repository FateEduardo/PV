using System;
using System.Collections.Generic;
using System.Linq;
using pv.Models.model;
using pv.Repository.Impl;

namespace PV.Service
{
    public class CategoryService
    {
        private readonly CategoryRepositoryImpl _categoryRepositoryImpl;

        public CategoryService()
        {
            this._categoryRepositoryImpl = new CategoryRepositoryImpl(new Context());
        }

        public List<CategoryEntity> getCategories()
        {
            try
            {
                return _categoryRepositoryImpl.FindAll().ToList();
            }
            catch (Exception ex)
            {
                return null;
            }
            
        }
    }
}