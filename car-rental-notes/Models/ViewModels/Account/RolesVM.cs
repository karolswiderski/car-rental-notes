using car_rental_notes.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace car_rental_notes.Models.ViewModels.Account
{
    public class RolesVM
    {
        public RolesVM() { }

        public RolesVM(RolesDTO row) {
            Roles_Id = row.Roles_Id;
            Nazwa = row.Nazwa;
        }

        public int Roles_Id { get; set; }
        public string Nazwa { get; set; }
    }
}