using System.ComponentModel.DataAnnotations;

namespace Nile_journy.Models
{
    public class Reviews
    {

        [Key]
        public int Id { get; set; }
        [Required]
        public string companian{ get; set; }
        public string writing { get; set; }
        public string title { get; set; }
        



    }
}
