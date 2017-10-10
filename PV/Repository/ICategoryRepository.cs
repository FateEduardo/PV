using System.Collections.Generic;
using pv.Models.model;

namespace pv.Repository
{
    public interface ICategoryRepository
    {
        List<CategoryEntity> FindCatgoryBySCategory(int ScategoryId);
    }
}