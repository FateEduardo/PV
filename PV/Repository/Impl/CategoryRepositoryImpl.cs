using System.Data.Entity;
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

        public override int count()
        {
            throw new System.NotImplementedException();
        }
    }
}