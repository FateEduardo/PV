using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pv.Models.model
{
    [ComplexType]
    public class AuditoryEntity
    {
        [Required]
        [Column("CREATE_USER", TypeName = "nvarchar")] 
        [StringLength(20)]
        public string CreateUser;

        [Required]
        [Column("CREATE_DATE",TypeName = "date")] 
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime CreateDate;
    }
}