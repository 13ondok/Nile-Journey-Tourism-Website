using Microsoft.AspNetCore.Mvc;
using Nile_journy.Models;
using System.Diagnostics;
using Nile_journy.Data;
using Microsoft.CodeAnalysis.Scripting;

namespace Nile_journy.Controllers
{
    public class HomeController : Controller
    {
        private AppDbContext context = new AppDbContext();
        private static int Id;
       public static bool mod = true, isl = true, his = true;
        public IActionResult home()
        {
            return View();
        }
        public IActionResult about()
        {
            return View();
        }
        public IActionResult Alex()
        {
            return View();
        }
        public IActionResult Alexhotels()
        {
            return View();
        }
        public IActionResult AlexPlaces()
        {
            return View();
        }
        public IActionResult Alexrasturant()
        {
            return View();
        }
        public IActionResult Alexthingstodo()
        {
            return View();
        }
        public IActionResult cairo()
        {
            return View();
        }
        public IActionResult cairohotels()
        {
            return View();
        }
        public IActionResult cairoplaces()
        {
            ViewBag.Islamic = isl;
            ViewBag.Historical = his;
            ViewBag.modern = mod;
            return View();
        }
        public IActionResult cairorestaurants()
        {
            return View();
        }
        public IActionResult cairothingsto()
        {
            return View();
        }
        public IActionResult favoritesController()
        {
            return View();
        }
        public IActionResult login()
        {
            return View();
        }

        public IActionResult sign_up() {
            return View();
                }
        [HttpPost]
        public IActionResult sign_up(string name,
            string email,
            string password)
        {
            var user = context.users.Where(u => u.Email.Equals(email)).FirstOrDefault();


            if (user != null)
            {
                @ViewBag.error = "Email already exist.";

            }
            else
            {
                var lastColumn = context.users.OrderBy(x => x.Id).LastOrDefault();
                if (lastColumn == null)
                {
                    Id = 1;
                }
                else
                {
                    Id = lastColumn.Id + 1;
                }
       
                user new_user = new user
                {

                    Name = name,
                    Email = email,
                    Password = password
                };
                // This the global id that will be used for authentication

                context.users.Add(new_user);
                context.SaveChanges();

                return RedirectToAction("home");
            }
            return View();
        }
        [HttpPost]
        public IActionResult login(
         string email,
         string password)
        {

            var user = context.users.Where(u => u.Email.Equals(email)).FirstOrDefault();

            if (user != null)
            {
                
                bool verified = password.Equals(user.Password);
                if (verified)
                {
                    Id = user.Id;
                  
                }
                else
                {
                    @ViewBag.Error = "Invalid email or password";
                }

            }
            else
            {
                @ViewBag.Error = "Invalid email or password";
            }
            return RedirectToAction("home_sucsses");
        }
        [HttpPost]
        public async Task<IActionResult> submitReview(string review,string titleReview)
        {
           var reviews = new Reviews
            {
                companian = "single",
                writing = review,
                title = titleReview
           };
          await  context.reviews.AddAsync(reviews);
           await context.SaveChangesAsync();
            return RedirectToAction("reviews","Home");
        }
        public IActionResult reviews()
        {
            var reviews = context.reviews.ToList();
            return View(reviews);
        }
        public IActionResult favorites()
        {
           
            return View();
        }
        [HttpPost]
        public IActionResult fav(string name, string description, string image) {
            Favorites fa = new Favorites
            {
                Name = name
                ,
                Description = description
                ,
                image = image
            };
            context.Add(fa);
            context.SaveChanges();
            return View();
        }
    public IActionResult home_sucsses() {
            return View();
        }
        [HttpPost]
        public IActionResult filtering(string input)
        {
           
            if (input.Equals("modern"))
            {
                isl = false;
                his = false;
                mod = true;

            }
            else if (input.Equals("Islamic"))
            {
                mod = false;
                his = false;
                isl = true;
            }
            else { isl = false; mod = false; his = true; }
 
            return RedirectToAction("cairoplaces", "Home");
        }

    }
    

    }

