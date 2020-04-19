using car_rental_notes.Models.Data;
using car_rental_notes.Models.ViewModels.Account;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace car_rental_notes.Controllers
{
    public class AccountController : Controller
    {
        // GET: Account
        public ActionResult Index()
        {
            return Redirect("~/Account/Login");
        }

        // GET: Account/Login
        [HttpGet]
        public ActionResult Login() {
            string userName = User.Identity.Name;
            if (!string.IsNullOrEmpty(userName)) return Redirect("~/Board/Index");

            return View();
        }

        // POST: Account/Login
        [HttpPost]
        public ActionResult Login(LoginUserVM model)
        {
            if (!ModelState.IsValid) return View(model);

            bool isValid = false;
            using (Db db = new Db())
            {
                if (db.Users.Any(x => x.Login.Equals(model.Login) && x.Haslo.Equals(model.Haslo)))
                {
                    isValid = true;
                }
            }

            if (!isValid)
            {
                ModelState.AddModelError("", "Błędny login lub hasło.");
                return View(model);
            }
            else
            {
                TempData["Login"] = "Zalogowano :)";
                FormsAuthentication.SetAuthCookie(model.Login, model.ZapamietajMnie);
                return RedirectToAction(FormsAuthentication.GetRedirectUrl(model.Login, model.ZapamietajMnie));
            }
        }

        // GET: Account/Logout
        [HttpPost]
        public ActionResult Logout()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("~/Account/Login");
        }
    }
}