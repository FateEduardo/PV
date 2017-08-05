using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pv.Models.model
{
    [Table("USER")]
    public partial class UserEntity 
    {
       
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public long Id { get; set; }

        [Required]
        [StringLength(20)]
        [Column("USER_NAME", TypeName = "nvarchar")]
        public string UserName { get; set; }

        [Required]
        [StringLength(20)]
        [Column("PASSWORD", TypeName = "nvarchar")]
        public string Password { get; set; }
        
        
        public AuditoryEntity AuditoryEntity { get; set; }
        
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("ROLE", TypeName = "bigint")]
        public long Rol { get; set; }

        [ForeignKey("ROLE")] 
        public virtual UserRolEntity UserRole { get; set; }
       
    }
}
