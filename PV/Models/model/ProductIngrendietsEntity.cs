using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pv.Models.model
{
    [Table("PRODUCT_INGREDIENTS")]
    public partial class ProductIngrendietsEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public long Id { get; set; }
        
        [Required]
        [Column("PRODUCT_ID", TypeName = "bigint")]
        public long ProductId { get; set; }
        
        [ForeignKey("ProductId")] 
        public virtual ProductEntity Product { get; set; }
        
        [Required]
        [Column("INGREDIENTS_ID", TypeName = "bigint")]
        public long IngredientId { get; set; }
        
        [ForeignKey("IngredientId")] 
        public virtual IngredientsEntity Ingredient { get; set; }
    
    }
}