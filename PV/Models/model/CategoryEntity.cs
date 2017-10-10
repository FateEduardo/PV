using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using System.Runtime.Serialization;

namespace pv.Models.model
{
    [Table ("CATEGORY")]
    public partial class CategoryEntity
    {
      
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("ID", TypeName = "bigint")]
        public long Id { get; set; }

      
        [Required]
        [StringLength(20)]
        [Column("NAME", TypeName = "nvarchar")]
        public string Name { get; set; }
        
        
        [Required]
        [Column("SCATEGORY_ID", TypeName = "bigint")]
        public long ScategoryId { get; set; }
        
        [ForeignKey("ScategoryId")]
        public virtual SuperCategoryEntity SuperCategoryEntity  { get; set; }
        
        public AuditoryEntity AuditoryEntity { get; set; }
    }
}