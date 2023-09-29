using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Invelop.Domain.ContactDetails.Commands;

public class AddContactDetailsCommand : IRequest<int>
{
    public string FirstName { get; set; }
    public string Surname { get; set; }
    public DateTime? DateOfBirth { get; set; }
    public string Address { get; set; }
    public string PhoneNumber { get; set; }
    public string IBAN { get; set; }
}
