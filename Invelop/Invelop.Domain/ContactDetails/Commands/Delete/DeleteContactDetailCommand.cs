using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Invelop.Domain.ContactDetails.Commands;

public class DeleteContactDetailCommand : IRequest<bool>
{
    public int Id { get; set; }
}
