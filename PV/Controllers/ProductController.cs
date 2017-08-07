using System.Collections.Generic;
using System.Web.Http;
using pv.Models.model;
using PV.Service;

namespace pv.Controllers
{
    [Route("pv/category")]
    public class ProductController: ApiController
    {
        private readonly ProductService _categoryService = new ProductService();
        
        [Authorize]
        [Route("/{int:id}")]
        [HttpGet]
        public IHttpActionResult  GetProductsByCategory(int id)
        {
            List<ProductEntity> productEntities = _categoryService.GetProductByCategory(id);
            return Ok(productEntities);
        }
        
    }
}