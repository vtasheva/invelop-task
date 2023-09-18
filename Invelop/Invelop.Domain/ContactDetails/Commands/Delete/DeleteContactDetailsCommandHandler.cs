using Invelop.Data.Abstractions;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Invelop.Domain.ContactDetails.Commands;

public class DeleteContactDetailsCommandHandler : IRequestHandler<DeleteContactDetailCommand, bool>
{
    private readonly IContactDetailRepository _repository;

    public DeleteContactDetailsCommandHandler(IContactDetailRepository repository)
    {
        _repository = repository;
    }

    public async Task<bool> Handle(DeleteContactDetailCommand request, CancellationToken cancellationToken)
    {
        await _repository.Delete(request.Id);

        return true;
    }
}
