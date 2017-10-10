using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace pv.Models.model
{
    [Table ("PRODUCT")]
    public partial class ProductEntity
    {
      
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public long Id { get; set; }

        [Required]
        [StringLength(20)]
        [Column("NAME", TypeName = "nvarchar")]
        public string Name { get; set; }
       
        [Required]
        [Column("CATEGORY_ID", TypeName = "bigint")]
        public long CategoryId { get; set; }
        
        [ForeignKey("CategoryId")] 
        public virtual CategoryEntity Category { get; set; }
        
        public AuditoryEntity AuditoryEntity { get; set; }
    }
}