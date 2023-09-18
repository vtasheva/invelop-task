using Invelop.Data.Abstractions;
using Invelop.Data.Models;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Invelop.Domain.ContactDetails.Commands;

public class UpdateContactDetailsCommandHandler : IRequestHandler<UpdateContactDetailsCommand, bool>
{
    private readonly IContactDetailRepository _repository;

    public UpdateContactDetailsCommandHandler(IContactDetailRepository repository)
    {
        _repository = repository;
    }

    public async Task<bool> Handle(UpdateContactDetailsCommand request, CancellationToken cancellationToken)
    {
        var contactDetails = new ContactDetail
        {
            FirstName = request.FirstName,
            Surname = request.Surname,
            DateOfBirth = request.DateOfBirth,
            Address = request.Address,
            PhoneNumber = request.PhoneNumber,
            IBAN =  request.IBAN
        };

        await _repository.Update(request.Id, contactDetails);

        return true;
    }
}
