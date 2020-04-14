using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace car_rental_notes.Models.Data
{
    [Table("Board")]
    public class BoardDTO
    {
        [Key]
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