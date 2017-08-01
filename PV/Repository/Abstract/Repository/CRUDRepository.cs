using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;
using System.Web;
using System.Web.UI.WebControls;

namespace pv.Repository.Abstract.Repository
{
    public abstract class CRUDRepository<Entity> : CPARepository<Entity> where Entity : class
    {
        protected DbContext context;

        public CRUDRepository(DbContext context)
        {
            this.context = context;
        }

        public abstract int count();

        public void Delete(Entity entity)
        {
            context.Set<Entity>().Remove(entity);
            context.SaveChanges();
        }

        public IEnumerable<Entity> FindAll()
        {
            return context.Set<Entity>().ToList<Entity>();
        }

        public Entity FindById(int id) 
        {
            return context.Set<Entity>().Find(id);
        }

        public void Save(Entity entity)
        { 
            context.Set<Entity>().Add(entity);
            context.SaveChanges();
        }

        public void Update(Entity entity)
        {
            context.Entry(entity).State = System.Data.Entity.EntityState.Modified;
            context.SaveChanges();
        }
    }
}