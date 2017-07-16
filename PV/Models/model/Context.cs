namespace PV.Models.model
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

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
            modelBuilder.Entity<UserRolEntity>()
                .HasMany(e => e.users)
                .WithRequired(e => e.userRole)
                .HasForeignKey(e => e.rol)
                .WillCascadeOnDelete(false);
        }
    }
}
