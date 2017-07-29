namespace pv.Models.model
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("USER")]
    public partial class UserEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public long id { get; set; }


        [Required]
        [StringLength(50)]
        [Column("USER_NAME", TypeName = "nvarchar")]
        public string userName { get; set; }

        [Required]
        [StringLength(50)]
        [Column("PASSWORD", TypeName = "nvarchar")]
        public string password { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("ROL", TypeName = "bigint")]
        [ForeignKey("ROL")]
        public long rol { get; set; }

        [Column("ROL")]
        public virtual UserRolEntity userRole { get; set; }
    }
}
