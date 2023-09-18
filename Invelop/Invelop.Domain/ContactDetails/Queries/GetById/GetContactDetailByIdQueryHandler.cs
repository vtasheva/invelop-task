using Invelop.Data.Abstractions;
using Invelop.Data.Models;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Invelop.Domain.ContactDetails.Queries;

public class GetContactDetailByIdQueryHandler : IRequestHandler<GetContactDetailByIdQuery, ContactDetail>
{
    private readonly IContactDetailRepository _repository;

    public GetContactDetailByIdQueryHandler(IContactDetailRepository repository)
    {
        _repository = repository;
    }

    public async Task<ContactDetail> Handle(GetContactDetailByIdQuery request, CancellationToken cancellationToken)
    {
        return await _repository.GetById(request.Id);
    }
}
