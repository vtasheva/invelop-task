using Invelop.Data.Abstractions;
using Invelop.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Invelop.Data.Repositories;

public class ContactDetailRepository : IContactDetailRepository
{
    private readonly MainContext _context;

    public ContactDetailRepository(MainContext context)
    {
        _context = context;
    }

    public async Task<ICollection<ContactDetail>> GetAll()
    {
        return await _context.ContactDetails.ToListAsync();
    }

    public async Task<ContactDetail> GetById(int id)
    {
        return await _context.ContactDetails.FirstOrDefaultAsync(x => x.Id == id);
    }


    public async Task<int> Add(ContactDetail contactDetail)
    {
        _context.ContactDetails.Add(contactDetail);

        await _context.SaveChangesAsync();

        return contactDetail.Id;
    }

    public async Task Update(int id, ContactDetail contactDetail)
    {
        var dbContactDetail = await GetById(id);
        dbContactDetail.FirstName = contactDetail.FirstName;
        dbContactDetail.Surname = contactDetail.Surname;
        dbContactDetail.DateOfBirth = contactDetail.DateOfBirth;
        dbContactDetail.PhoneNumber = contactDetail.PhoneNumber;
        dbContactDetail.Address = contactDetail.Address;
        dbContactDetail.IBAN = contactDetail.IBAN;

        await _context.SaveChangesAsync();
    }

    public async Task Delete(int id)
    {
        var contactDetail = _context.ContactDetails.FirstOrDefault(x => x.Id == id);

        if (contactDetail is null)
        {
            return;
        }

        _context.ContactDetails.Remove(contactDetail);

        await _context.SaveChangesAsync();
    }
}
