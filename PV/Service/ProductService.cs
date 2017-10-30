using System.Collections.Generic;
using pv.Models.model;
using pv.Repository.Impl;

namespace PV.Service
{
    public class ProductService
    {
        private readonly ProductRepositoryImpl _productRepositoryImpl;

        public ProductService()
        {
            this._productRepositoryImpl = new ProductRepositoryImpl(new Context());
        }

        public List<ProductEntity> GetProductByCategory(int id)
        {
            return this._productRepositoryImpl.GetByCategory(id);
        }
        
        public List<ProductEntity> FindProductByName(string name)
        {
            return this._productRepositoryImpl.FindProductByName(name);
        }
    }
}