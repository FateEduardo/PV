using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pv.Models.model
{
    [Table("PRODUCT_INGREDIENTS")]
    public class ProductIngrendietsEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public long Id { get; set; }
        
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("PRODUCT_ID", TypeName = "bigint")]
        public long ProductId { get; set; }
        
        [ForeignKey("PRODUCT")] 
        public virtual ProductEntity Product { get; set; }
        
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("INGREDIENTS_ID", TypeName = "bigint")]
        public long IngredientsId { get; set; }
        
        [ForeignKey("PRODUCT")] 
        public virtual IngredientsEntity Ingredient { get; set; }
    
    }
}