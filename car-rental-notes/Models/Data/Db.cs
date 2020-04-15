using System.Data.Entity;

namespace car_rental_notes.Models.Data
{
    public class Db : DbContext
    {
        public DbSet<BoardDTO> Board { get; set; }
    }
}