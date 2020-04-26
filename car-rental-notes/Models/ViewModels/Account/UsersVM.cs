using car_rental_notes.Models.Data;

namespace car_rental_notes.Views.Account
{
    public class UsersVM
    {
        public UsersVM() { }

        public UsersVM(UsersDTO row) {
            User_Id = row.User_Id;
            Login = row.Login;
            Haslo = row.Haslo;
        }

        public int User_Id { get; set; }
        public string Login { get; set; }
        public string Haslo { get; set; }
    }
}