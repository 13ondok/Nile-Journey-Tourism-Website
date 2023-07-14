






using Microsoft.EntityFrameworkCore;
using Nile_journy.Models;

namespace Nile_journy.Data




{
    public class AppDbContext :DbContext
    {
        public AppDbContext()
        {

        }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)

        { 
        
        
        
        
        
        }
        public DbSet<user> users { get; set; }
        public DbSet<Reviews> reviews { get; set; }
        public DbSet<Favorites> favorites { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=DESKTOP-G7T34D1;Database=journy;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True");
        }




    }
}
