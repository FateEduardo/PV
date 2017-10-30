using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PV.Models.DTO
{
    public class ProductDTO
    {
        [Required]
        [StringLength(20)]
        public string Name { get; set; }
    }
}