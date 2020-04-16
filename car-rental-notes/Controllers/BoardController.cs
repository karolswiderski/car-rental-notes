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

            using (Db db = new Db())
            {
                boardList = db.Board.ToArray().Select(x => new BoardVM(x)).ToList();
            }

            return View(boardList);
        }


        [HttpGet]
        public ActionResult AddNewNote()
        {
            BoardVM boardVM = new BoardVM();

            using (Db db = new Db())
            {
                boardVM.Operations = new SelectList(db.Operations.ToList(), "Operations_Id", "Nazwa");
            }

            return PartialView(boardVM);
        }


        [HttpPost]
        public ActionResult AddNewNote(BoardVM boardVM) {

            using (Db db = new Db())
            {
                OperationsDTO opDTO = db.Operations.FirstOrDefault(x => x.Operations_Id == boardVM.Rodzaj_Operacji_Id);

                BoardDTO newNote = new BoardDTO
                {
                    Data_Operacji = boardVM.Data_Operacji,
                    Miejsce_Operacji = boardVM.Miejsce_Operacji,
                    Klasa_Pojazdu = boardVM.Klasa_Pojazdu,
                    Godzina_Operacji = boardVM.Godzina_Operacji,
                    Zlecajacy = boardVM.Zlecajacy,
                    Nazwa_Klienta = boardVM.Nazwa_Klienta,
                    Telefon = boardVM.Telefon,
                    Samochod = boardVM.Samochod,
                    Uwagi = boardVM.Uwagi,
                    Rodzaj_Operacji = opDTO.Nazwa,
                    Rodzaj_Operacji_Id = boardVM.Rodzaj_Operacji_Id
                };

                db.Board.Add(newNote);
                db.SaveChanges();
            }

            return RedirectToAction("Index");
        }








    }
}