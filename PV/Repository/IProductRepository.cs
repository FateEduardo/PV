using System.Collections.Generic;
using pv.Models.model;

namespace pv.Repository
{
    public interface IProductRepository
    {
        List<ProductEntity> GetByCategory(int id);
        
        List<ProductEntity> FindProductByName(string name);
    }
}