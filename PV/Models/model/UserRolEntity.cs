using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace pv.Models.model
{
  
    [Table("ROLE")]
    public partial class UserRolEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("ID", TypeName = "bigint")]
        public long Id { get; set; }

        [Required]
        [StringLength(20)]
        [Column("ROLE_NAME", TypeName = "nvarchar")]
        public string RolName { get; set; }
        
        public AuditoryEntity AuditoryEntity { get; set; }
    }
}
