using car_rental_notes.Models.Data;
using car_rental_notes.Models.ViewModels.Wall;
using System;
using System.Collections.Generic;
using System.Linq;
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

        [HttpGet]
        public ActionResult AddAnnouncement()
        {
            AnnouncementsVM AnnouncementVM = new AnnouncementsVM();

            return PartialView(AnnouncementVM);

        }

        [HttpPost]
        public ActionResult AddAnnouncement(AnnouncementsVM model)
        {
            string userName = User.Identity.Name;

            using (Db db = new Db())
            {
                AnnouncementsDTO AnnDTO = new AnnouncementsDTO
                {
                    Temat = model.Temat,
                    Tresc = model.Tresc,
                    Data = System.DateTime.Now.Add(new TimeSpan(0, 0, 0, 0)),
                    Autor = userName
                };

                db.Announcements.Add(AnnDTO);
                db.SaveChanges();
            }

            return RedirectToAction("Index");
        }
    }
}