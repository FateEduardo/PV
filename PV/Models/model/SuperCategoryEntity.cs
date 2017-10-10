﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace pv.Models.model
{
    [Table ("SCATEGORY")]
    public partial class SuperCategoryEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("ID", TypeName = "bigint")]
        public long Id { get; set; }
        
        [Required]
        [StringLength(20)]
        [Column("NAME", TypeName = "nvarchar")]
        public string Name { get; set; }
        
        public AuditoryEntity AuditoryEntity { get; set; }
        
    }
}    