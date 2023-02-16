using GYM_APP_API.Models;
using Microsoft.EntityFrameworkCore;

namespace GYM_APP_API.Data
{
    public class FullStackDbContext : DbContext
    {
        public FullStackDbContext(DbContextOptions option): base(option) { }

        public DbSet<Member> Members { get; set; } 
    }
}
