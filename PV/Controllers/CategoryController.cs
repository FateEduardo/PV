﻿using System.Collections.Generic;
using System.Web.Http;
using pv.Models.model;
using PV.Exceptions;
using PV.Service;

namespace pv.Controllers
{
    public class CategoryController: ApiController
    {
        private readonly CategoryService _categoryService = new CategoryService();
        
        private readonly ControllerLogger<CategoryController> _controllerLogger = 
            new ControllerLogger<CategoryController>("CategoryController");
        
        [Authorize]
        [Route("pv/category/{id:int}")]
        [HttpGet]
        [ItemNotFoundExceptionFilter]
        public IHttpActionResult  GetCategories(int id)
        {
         
            _controllerLogger.LoggController("Get List of Categories");
            List<CategoryEntity> categoryEntities = _categoryService.GetCategories(id);
            return Ok(categoryEntities);
           
        }
    }
}