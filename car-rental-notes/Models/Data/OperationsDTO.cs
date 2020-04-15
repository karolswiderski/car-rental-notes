using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace car_rental_notes.Models.Data
{
    [Table("Operations")]
    public class OperationsDTO
    {
        [Key]
        public int Operations_Id { get; set; }
        public string Nazwa { get; set; }
    }
}