using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Net.Http;

namespace pv.Models.model
{


    public partial class Context : DbContext
    {
        public Context()
            : base("name=Context")
        {
            
        }

        public virtual DbSet<UserEntity> USERs { get; set; }
        public virtual DbSet<UserRolEntity> USER_ROLE { get; set; }
        public virtual DbSet<ProductEntity> PRODUCTS { get; set; }
        public virtual DbSet<ProductIngrendietsEntity> PRODUCT_INGREDIENTS { get; set; }
        public virtual DbSet<CategoryEntity> CATEGORY { get; set; }
        public virtual DbSet<IngredientsEntity> INGREDIENTS { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();


            modelBuilder.Entity<UserEntity>()
                .HasRequired(u => u.UserRole).WithMany();
            modelBuilder.Entity<CategoryEntity>()
                .HasRequired(c => c.SuperCategoryEntity).WithMany();
            modelBuilder.Entity<ProductIngrendietsEntity>()
                .HasRequired(pi => pi.Ingredient).WithMany();
            modelBuilder.Entity<ProductIngrendietsEntity>()
                .HasRequired(pi => pi.Product).WithMany();
            modelBuilder.Entity<ProductEntity>()
                .HasRequired(p => p.Category).WithMany();

        }
    }
}
