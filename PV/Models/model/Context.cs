using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

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

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
          
            
            modelBuilder.Entity<UserRolEntity>()
                .HasMany(e => e.Users)
                .WithRequired(e => e.UserRole)
                .HasForeignKey(e => e.Rol)
                .WillCascadeOnDelete(false);
        }
    }
}
