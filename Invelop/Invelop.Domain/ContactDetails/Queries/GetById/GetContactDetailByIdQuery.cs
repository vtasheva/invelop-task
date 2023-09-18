using Invelop.Data.Models;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Invelop.Domain.ContactDetails.Queries;

public class GetContactDetailByIdQuery : IRequest<ContactDetail>
{
    public int Id { get; set; }
}
