using System.Collections.Generic;
using System.Web.Http;
using pv.Models.model;
using PV.Exceptions;
using PV.Models.DTO;
using PV.Service;

namespace pv.Controllers
{
    
    public class ProductController: ApiController
    {
        private readonly ProductService _productService = new ProductService();
        
        private readonly ControllerLogger<CategoryController> _controllerLogger = 
            new ControllerLogger<CategoryController>("ProductController");
        
        [Authorize]
        [Route("pv/product/{id:int}")]
        [HttpGet]
        public IHttpActionResult  GetProductsByCategory(int id)
        {
            _controllerLogger.LoggController("Get List of Products");
            List<ProductEntity> productEntities = _productService.GetProductByCategory(id);
            return Ok(productEntities);
        }
        
        [Authorize]
        [Route("pv/product")]
        [HttpPost]
        public IHttpActionResult  FindProudctByName(ProductDTO productDto)
        {
            _controllerLogger.LoggController("Find a product by name: " + productDto.Name);
            List<ProductEntity> productEntities = _productService.FindProductByName(productDto.Name);
                     return Ok(productEntities);
                 }
        
    }
}