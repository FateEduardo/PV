using System.Collections.Generic;
using System.Web.Http;
using pv.Models.model;
using PV.Exceptions;
using PV.Service;

namespace pv.Controllers
{
    
    public class ProductController: ApiController
    {
        private readonly ProductService _categoryService = new ProductService();
        
        private readonly ControllerLogger<CategoryController> _controllerLogger = 
            new ControllerLogger<CategoryController>("ProductController");
        
        [Authorize]
        [Route("pv/product/{id:int}")]
        [HttpGet]
        public IHttpActionResult  GetProductsByCategory(int id)
        {
            _controllerLogger.LoggController("Get List of Products");
            List<ProductEntity> productEntities = _categoryService.GetProductByCategory(id);
            return Ok(productEntities);
        }
        
    }
}