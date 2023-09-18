using Invelop.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Invelop.Data.Abstractions;

public interface IContactDetailRepository
{
    Task<ICollection<ContactDetail>> GetAll();
    Task<ContactDetail> GetById(int id);
    Task<int> Add(ContactDetail contactDetail);
    Task Update(int id, ContactDetail contactDetail);
    Task Delete(int id);
}
