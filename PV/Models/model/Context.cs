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
          
         
            modelBuilder.Entity<UserRolEntity>()
                .HasMany(e => e.Users)
                .WithRequired(e => e.UserRole)
                .HasForeignKey(e => e.Rol)
                .WillCascadeOnDelete(false);
            
            modelBuilder.Entity<ProductEntity>()
                .HasMany(e => e.ProductIngrendiets)
                .WithRequired(e => e.Product)
                .HasForeignKey(e => e.ProductId)
                .WillCascadeOnDelete(false);
            
            modelBuilder.Entity<CategoryEntity>()
                .HasMany(e => e.Product)
                .WithRequired(e => e.Category)
                .HasForeignKey(e => e.CategoryId)
                .WillCascadeOnDelete(false);
            
            modelBuilder.Entity<IngredientsEntity>()
                .HasMany(e => e.ProductsIngredients)
                .WithRequired(e => e.Ingredient)
                .HasForeignKey(e => e.IngredientsId)
                .WillCascadeOnDelete(false);
        }
    }
}
