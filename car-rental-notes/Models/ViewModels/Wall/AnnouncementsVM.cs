using car_rental_notes.Models.Data;
using System;

namespace car_rental_notes.Models.ViewModels.Wall
{
    public class AnnouncementsVM
    {
        public AnnouncementsVM() { }

        public AnnouncementsVM(AnnouncementsDTO row) {
            Announcement_Id = row.Announcement_Id;
            Data = row.Data;
            Autor = row.Autor;
            Temat = row.Temat;
            Tresc = row.Tresc;
        }

        public int Announcement_Id { get; set; }
        public DateTime Data { get; set; }
        public string Autor { get; set; }
        public string Temat { get; set; }
        public string Tresc { get; set; }
    }
}