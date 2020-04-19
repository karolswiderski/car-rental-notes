using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace car_rental_notes.Models.Data
{
    [Table("UserRoles")]
    public class UserRolesDTO
    {
        [Key, Column(Order = 0)]
        public int User_Id { get; set; }
        [Key, Column(Order = 1)]
        public int Role_Id { get; set; }

        [ForeignKey("User_Id")]
        public virtual UsersDTO User { get; set; }
        [ForeignKey("Role_Id")]
        public virtual RolesDTO Role { get; set; }
    }
}