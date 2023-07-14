using System.ComponentModel.DataAnnotations;

namespace Nile_journy.Models
{
    public class user
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
