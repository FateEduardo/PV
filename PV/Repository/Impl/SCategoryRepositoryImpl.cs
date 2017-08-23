using System.Data.Entity;
using pv.Models.model;
using pv.Repository.Abstract.Repository;

namespace pv.Repository.Impl
{
    public class SCategoryRepositoryImpl: CRUDRepository<SuperCategoryEntity>,ISCategoryRepository
    {
        private readonly Context _context;
        
        public SCategoryRepositoryImpl(DbContext context) : base(context)
        {
            this._context = (Context) context;
        }

        public override int Count()
        {
            throw new System.NotImplementedException();
        }
    }
}