using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace car_rental_notes.Models.ViewModels.Account
{
    public class LoginUserVM
    {
        public string Login { get; set; }
        public string Haslo { get; set; }
        public bool ZapamietajMnie { get; set; }
    }
}