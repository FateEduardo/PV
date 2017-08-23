using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using pv.Models.model;
using pv.Repository.Abstract.Repository;

namespace pv.Repository.Impl
{
    public class ProductRepositoryImpl: CRUDRepository<ProductEntity>,IProductRepository
    {
        private readonly Context _context;
        
        public ProductRepositoryImpl(DbContext context) : base(context)
        {
            this._context = (Context) context;

        }

        public override int Count()
        {
            throw new System.NotImplementedException();
        }

        public List<ProductEntity> GetByCategory(int id)
        {
            var products = from p in this._context.PRODUCTS
                where p.CategoryId == id select p;

            return products.ToList();

        }
    }
}