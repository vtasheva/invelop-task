using Invelop.Data.Abstractions;
using Invelop.Data.Models;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Invelop.Domain.ContactDetails.Queries;

public class GetAllContactDetailsQueryHandler : IRequestHandler<GetAllContactDetailsQuery, IEnumerable<ContactDetail>>
{
    private readonly IContactDetailRepository _repository;

    public GetAllContactDetailsQueryHandler(IContactDetailRepository repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<ContactDetail>> Handle(GetAllContactDetailsQuery request, CancellationToken cancellationToken)
    {
        return await _repository.GetAll();
    }
}
