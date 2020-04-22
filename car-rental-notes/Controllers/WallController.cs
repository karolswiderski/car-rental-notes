using car_rental_notes.Models.Data;
using car_rental_notes.Models.ViewModels.Wall;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace car_rental_notes.Controllers
{
    public class WallController : Controller
    {
        // GET: Wall
        public ActionResult Index()
        {
            List<AnnouncementsVM> AnnouncementsList;

            using (Db db = new Db())
            {
                AnnouncementsList = db.Announcements.ToArray().Select(x => new AnnouncementsVM(x)).ToList();
            }

            return View(AnnouncementsList);
        }
    }
}