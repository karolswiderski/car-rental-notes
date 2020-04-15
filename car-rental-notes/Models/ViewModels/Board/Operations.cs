using car_rental_notes.Models.Data;

namespace car_rental_notes.Models.ViewModels.Board
{
    public class Operations
    {
        public Operations() { }

        public Operations(OperationsDTO row)
        {
            Operations_Id = row.Operations_Id;
            Nazwa = row.Nazwa;
        }

        public int Operations_Id { get; set; }
        public string Nazwa { get; set; }
    }
}