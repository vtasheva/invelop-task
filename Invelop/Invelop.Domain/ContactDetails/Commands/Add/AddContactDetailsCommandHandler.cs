using Invelop.Data.Abstractions;
using Invelop.Data.Models;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Invelop.Domain.ContactDetails.Commands;

public class AddContactDetailsCommandHandler : IRequestHandler<AddContactDetailsCommand, int>
{
    private readonly IContactDetailRepository _repository;

    public AddContactDetailsCommandHandler(IContactDetailRepository repository)
    {
        _repository = repository;
    }

    public async Task<int> Handle(AddContactDetailsCommand request, CancellationToken cancellationToken)
    {
        var contactDetails = new ContactDetail
        {
            FirstName = request.FirstName,
            Surname = request.Surname,
            DateOfBirth = request.DateOfBirth,
            Address = request.Address,
            PhoneNumber = request.PhoneNumber,
            IBAN = request.IBAN,
        };

        return await _repository.Add(contactDetails);
    }
}
