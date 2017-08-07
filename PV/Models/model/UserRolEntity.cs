using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace pv.Models.model
{
  
    [Table("ROLE")]
    [Serializable]
    public partial class UserRolEntity
    {
        [SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public UserRolEntity()
        {
            Users = new HashSet<UserEntity>();
        }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("ID", TypeName = "bigint")]
        public long Id { get; set; }

        [Required]
        [StringLength(20)]
        [Column("ROLE_NAME", TypeName = "nvarchar")]
        public string RolName { get; set; }

        [SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<UserEntity> Users { get; set; }
        
       public AuditoryEntity AuditoryEntity { get; set; }
    }
}
