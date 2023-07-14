using System.ComponentModel.DataAnnotations;

namespace Nile_journy.Models
{
    public class Favorites
    {



        [Key]
        public int  favId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required] 
        public string image { get; set;}
        



    }
}
