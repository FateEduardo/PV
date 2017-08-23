using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http.Results;
using pv.Models.model;
using pv.Repository.Impl;
using PV.Exceptions;

namespace PV.Service
{
    public class CategoryService
    {
        private readonly CategoryRepositoryImpl _categoryRepositoryImpl;

        public CategoryService()
        {
            this._categoryRepositoryImpl = new CategoryRepositoryImpl(new Context());
        }

        public List<CategoryEntity> GetCategories()
        {
           return _categoryRepositoryImpl.FindAll().ToList();
       
        }
    }
}