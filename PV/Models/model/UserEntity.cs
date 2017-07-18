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
        public long id { get; set; }

        [Required]
        [StringLength(50)]
        public string userName { get; set; }

        [Required]
        [StringLength(50)]
        public string password { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long rol { get; set; }

        public virtual UserRolEntity userRole { get; set; }
    }
}
