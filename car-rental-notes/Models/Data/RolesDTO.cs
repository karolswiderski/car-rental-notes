using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace car_rental_notes.Models.Data
{
    [Table("Roles")]
    public class RolesDTO
    {
        [Key]
        public int Roles_Id { get; set; }
        public string Nazwa { get; set; }
    }
}