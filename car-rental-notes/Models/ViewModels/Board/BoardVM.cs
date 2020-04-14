using car_rental_notes.Models.Data;
using System;

namespace car_rental_notes.Models.ViewModels.Board
{
    public class BoardVM
    {
        public BoardVM() { }

        public BoardVM(BoardDTO row)
        {
            Board_Id = row.Board_Id;
            Rodzaj_Operacji_Id = row.Rodzaj_Operacji_Id;
            Rodzaj_Operacji = row.Rodzaj_Operacji;
            Miejsce_Operacji = row.Miejsce_Operacji;
            Zlecajacy = row.Zlecajacy;
            Data_Operacji = row.Data_Operacji;
            Godzina_Operacji = row.Godzina_Operacji;
            Nazwa_Klienta = row.Nazwa_Klienta;
            Telefon = row.Telefon;
            Samochod = row.Samochod;
            Klasa_Pojazdu = row.Klasa_Pojazdu;
            Uwagi = row.Uwagi;
            Wykonawca_Id = row.Wykonawca_Id;
            Wykonawca = row.Wykonawca;
        }

        public int Board_Id { get; set; }
        public string Rodzaj_Operacji { get; set; }
        public int Rodzaj_Operacji_Id { get; set; }
        public string Miejsce_Operacji { get; set; }
        public string Zlecajacy { get; set; }
        public DateTime Data_Operacji { get; set; }
        public TimeSpan Godzina_Operacji { get; set; }
        public string Nazwa_Klienta { get; set; }
        public string Telefon { get; set; }
        public string Samochod { get; set; }
        public string Klasa_Pojazdu { get; set; }
        public string Uwagi { get; set; }
        public string Wykonawca { get; set; }
        public int Wykonawca_Id { get; set; }
    }
}