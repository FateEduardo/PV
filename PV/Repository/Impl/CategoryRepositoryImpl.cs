using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using pv.Models.model;
using pv.Repository.Abstract.Repository;

namespace pv.Repository.Impl
{
    public class CategoryRepositoryImpl:CRUDRepository<CategoryEntity>,ICategoryRepository
    {
        private readonly Context _context;
        
        public CategoryRepositoryImpl(DbContext context) : base(context)
        {
            this._context = (Context)context;
        }

        public override int Count()
        {
            throw new NotImplementedException();
        }


        public List<CategoryEntity> FindCatgoryBySCategory(int scategoryId)
        {
            var category = from c in _context.CATEGORY
                where c.ScategoryId == scategoryId
                select c;
            return category.ToList();
        }
    }
}