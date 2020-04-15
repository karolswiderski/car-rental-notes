using car_rental_notes.Models.Data;
using car_rental_notes.Models.ViewModels.Board;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace car_rental_notes.Controllers
{
    public class BoardController : Controller
    {
        // GET: Board
        public ActionResult Index()
        {
            List<BoardVM> boardList;

            using (Db db = new Db()) {
                boardList = db.Board.ToArray().Select(x => new BoardVM(x)).ToList();
            }

            return View(boardList);
        }
    }
}