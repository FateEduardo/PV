using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pv.Models.model
{
    [ComplexType]
    public class AuditoryEntity
    {
        [Required]
        [StringLength(20)]
        [Column("CREATE_USER", TypeName = "nvarchar")]
        public string CreateUser{ get; set; }

        [Required]
        [Column("CREATE_DATE",TypeName = "date")] 
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime CreateDate{ get; set; }
    }
}