namespace pv.Models.model
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("USER_ROLE")]
    public partial class UserRolEntity
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public UserRolEntity()
        {
            users = new HashSet<UserEntity>();
        }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("ID", TypeName = "bigint")]
        public long id { get; set; }

        [Required]
        [StringLength(50)]
        [Column("ROLE_NAME", TypeName = "nvarchar")]
        public string rolName { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<UserEntity> users { get; set; }
    }
}
