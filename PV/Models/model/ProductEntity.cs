using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace pv.Models.model
{
    [Table ("PRODUCT")]
    [Serializable]
    public class ProductEntity
    {
        [SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ProductEntity()
        {
            ProductIngrendiets = new HashSet<ProductIngrendietsEntity>();
        }
        
        [SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ProductIngrendietsEntity> ProductIngrendiets { get; set; }
        

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public long Id { get; set; }

        [Required]
        [StringLength(20)]
        [Column("NAME", TypeName = "nvarchar")]
        public string Name { get; set; }
       
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("CATEGORY_ID", TypeName = "bigint")]
        public long CategoryId { get; set; }
        
        [ForeignKey("CATEGORY")] 
        public virtual CategoryEntity Category { get; set; }
        
        public AuditoryEntity AuditoryEntity { get; set; }
    }
}