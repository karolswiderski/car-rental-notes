using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace car_rental_notes.Models.Data
{
    [Table("Users")]
    public class UsersDTO
    {
        [Key]
        public int User_Id { get; set; }
        public string Login { get; set; }
        public string Haslo { get; set; }

    }
}