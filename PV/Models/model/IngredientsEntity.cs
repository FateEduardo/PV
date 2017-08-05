using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace pv.Models.model
{
    [Table ("INGREDIENTS")]
    public class IngredientsEntity
    {
        [SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public IngredientsEntity()
        {
            ProductsIngredients = new HashSet<ProductIngrendietsEntity>();
        }
        
        [SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ProductIngrendietsEntity> ProductsIngredients { get; set; }
       
         [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
         [Column("ID", TypeName = "bigint")]
         public long Id { get; set; }

          [Required]
          [StringLength(20)]
          [Column("NAME", TypeName = "nvarchar")]
          public string Name { get; set; }
       
          [Required]
          [Column("EXTRA", TypeName = "bit")]
          public bool Extra { get; set; }
        
        [Required]
        [Column("PRICE")]
        [DataType("decimal(4,2)")]
        public double Price { get; set; }
        
          [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
          [Column("CATEGORY_ID", TypeName = "bigint")]
          public long CategoryId { get; set; }
          
          public AuditoryEntity AuditoryEntity { get; set; }
    }
}