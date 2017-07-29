using System;
using System.Configuration;

namespace pv.Models.model
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("ROLE")]
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
        [StringLength(20)]
        [Column("ROLE_NAME", TypeName = "nvarchar")]
        public string rolName { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<UserEntity> users { get; set; }
        
        [Required]
        [StringLength(20)]
        [Column ("CREATE_NAME", TypeName = "nvarchar")]
        public string createName { get; set; }
        
        [Required]
        [Column ("CREATE_DATE", TypeName = "date")]
        public DateTime createDate { get; set; }
    }
}
