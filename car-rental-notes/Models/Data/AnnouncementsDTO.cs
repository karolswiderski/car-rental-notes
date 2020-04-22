using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace car_rental_notes.Models.Data
{
    [Table("Announcements")]
    public class AnnouncementsDTO
    {
        [Key]
        public int Announcement_Id { get; set; }
        public DateTime Data { get; set; }
        public string Autor { get; set; }
        public string Temat { get; set; }
        public string Tresc { get; set; }
    }
}