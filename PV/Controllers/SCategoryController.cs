using System.Collections.Generic;
using System.Web.Http;
using pv.Models.model;
using PV.Exceptions;
using PV.Service;

namespace pv.Controllers
{
    public class SCategoryController: ApiController
    {
        private readonly SCategoryService _categoryService = new SCategoryService();
        
        private readonly ControllerLogger<SCategoryController> _controllerLogger = 
            new ControllerLogger<SCategoryController>("SCategoryController");
        
        [SS.Authorize]
        [Route("pv/scategory")]
        [HttpGet]
        [ItemNotFoundExceptionFilter]
        public IHttpActionResult  GetSuperCategories()
        {
         
            _controllerLogger.LoggController("Get List of Super  Categories");
            List<SuperCategoryEntity> categoryEntities = _categoryService.GetSuperCategoryEntities();
            return Ok(categoryEntities);
           
        }
    }
}