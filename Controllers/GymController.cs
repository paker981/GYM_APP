using GYM_APP_API.Data;
using GYM_APP_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GYM_APP_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GymController : Controller
    {
        private readonly FullStackDbContext _context;

        public GymController(FullStackDbContext context)
        {
            _context = context;
        }
        

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Update([FromRoute] Guid id, Member memberUpdate)
        {

            var member = await _context.Members.FindAsync(id);
            if (member == null)
            {
                return NotFound();
            }

            member.firstName = memberUpdate.firstName;
            member.lastName = memberUpdate.lastName;
            member.email = memberUpdate.email;
            member.mobile = memberUpdate.mobile;
            member.weight = memberUpdate.weight;
            member.height = memberUpdate.height;
            member.gender = memberUpdate.gender;
            member.requireTrainer= memberUpdate.requireTrainer;
            member.package= memberUpdate.package;
            member.important= memberUpdate.important;
            member.haveGymBefore= memberUpdate.haveGymBefore;
            member.enquiryDate= memberUpdate.enquiryDate;

            await _context.SaveChangesAsync();
            return Ok(member);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetMember([FromRoute] Guid id)
        {
            var member = await _context.Members.FirstOrDefaultAsync(x => x.id == id);

            if (member == null)
            {
                return NotFound();

            }

            return Ok(member);
        }
        

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteMember([FromRoute] Guid id)
        {
            var member = await _context.Members.FindAsync(id);
            if (member == null)
            {
                return NotFound();
            }
            _context.Members.Remove(member);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> AddMember([FromBody] Member member)
        {
            member.id = Guid.NewGuid();

            await _context.Members.AddAsync(member);
            await _context.SaveChangesAsync();

            return Ok(member);

        }
        [HttpGet]
        public async Task<IActionResult> GetMembers()
        {
          
            return Ok(await _context.Members.ToListAsync());
        }
        
    }
}
