using System.Collections.Generic;
using System.Web.Http;
using pv.Models.model;
using PV.Service;

namespace pv.Controllers
{
    public class CategoryController: ApiController
    {
        private readonly CategoryService _categoryService = new CategoryService();
        
        [Authorize]
        [Route("pv/category")]
        [HttpGet]
        public IHttpActionResult  GetCategories()
        {
            List<CategoryEntity> categoryEntities = _categoryService.getCategories();
            return Ok(categoryEntities);
        }
    }
}