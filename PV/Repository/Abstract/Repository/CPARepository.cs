using System.Collections.Generic;

namespace pv.Repository.Abstract.Repository
{
    interface CPARepository<Entity> where Entity : class
    
    {
        IEnumerable<Entity> FindAll();
        Entity FindById(int id);
        void Save(Entity entity);
        void Delete(Entity entity);
        void Update(Entity entity);
        int count();
    }
}
