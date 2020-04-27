using car_rental_notes.Models.Data;
using car_rental_notes.Models.ViewModels.Board;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace car_rental_notes.Controllers
{
    public class BoardController : Controller
    {
        // GET: Board
        public ActionResult Index(bool flag = true, int numberOfDays = 0, string whichDay = "01/01/2020")
        {
            if (flag == true)
            {
                TempData["SelectedDate"] = System.DateTime.Now.Add(new TimeSpan(0, 0, 0, 0)).ToString("dd/MM/yyyy");
                TempData["NumberOfDays"] = 0;
            }
            else
            { //jeżeli metoda Index została wywolana w NextDay/PreviousDay:
                TempData["SelectedDate"] = whichDay;
                TempData["NumberOfDays"] = numberOfDays;
            }

            List<BoardVM> boardList;

            using (Db db = new Db())
            {
                boardList = db.Board.ToArray().Select(x => new BoardVM(x)).ToList();
                TempData["Counter"] = boardList.Where(x => x.Data_Operacji == Convert.ToDateTime(TempData["SelectedDate"])).Count();
            }

            
            return View(boardList);
        }

        // GET: Board/NextDay
        [HttpGet]
        public ActionResult NextDay()
        {
            int numberOfDays = Convert.ToInt32(TempData["NumberOfDays"]);

            TempData["NumberOfDays"] = numberOfDays++;

            TempData["SelectedDate"] = System.DateTime.Now.Add(new TimeSpan(numberOfDays, 0, 0, 0)).ToString("dd/MM/yyyy");

            string whichDay = TempData["SelectedDate"].ToString();


            return RedirectToAction("Index", new { flag = false, numberOfDays, whichDay });
        }

        // GET: Board/PreviousDay
        [HttpGet]
        public ActionResult PreviousDay()
        {
            int numberOfDays = Convert.ToInt32(TempData["NumberOfDays"]);

            TempData["NumberOfDays"] = numberOfDays--;

            TempData["SelectedDate"] = System.DateTime.Now.Add(new TimeSpan(numberOfDays, 0, 0, 0)).ToString("dd/MM/yyyy");

            string whichDay = TempData["SelectedDate"].ToString();


            return RedirectToAction("Index", new { flag = false, numberOfDays, whichDay });
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
        public ActionResult AddNewNote(BoardVM boardVM)
        {
            if (!ModelState.IsValid)
            {
                return View(boardVM);
            }
           
           

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

        // GET: Board/DeleteNote
        [HttpGet]
        public ActionResult DeleteNote(int id)
        {

            using (Db db = new Db())
            {
                BoardDTO dto = db.Board.Find(id);
                db.Board.Remove(dto);
                db.SaveChanges();
            }

            try
            {
                int numberOfDays = Convert.ToInt32(TempData["NumberOfDays"]);
                string whichDay = TempData["SelectedDate"].ToString();
                return RedirectToAction("Index", new { flag = false, numberOfDays, whichDay });
            }
            catch (NullReferenceException e)
            {
                return RedirectToAction("Index");
            }

        }






    }
}