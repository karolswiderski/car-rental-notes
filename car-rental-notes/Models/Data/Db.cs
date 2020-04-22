using System.Data.Entity;

namespace car_rental_notes.Models.Data
{
    public class Db : DbContext
    {
        public DbSet<BoardDTO> Board { get; set; }
        public DbSet<OperationsDTO> Operations { get; set; }
        public DbSet<UsersDTO> Users { get; set; }
        public DbSet<RolesDTO> Roles { get; set; }
        public DbSet<UserRolesDTO> UserRoles { get; set; }
        public DbSet<AnnouncementsDTO> Announcements { get; set; }
    }
}