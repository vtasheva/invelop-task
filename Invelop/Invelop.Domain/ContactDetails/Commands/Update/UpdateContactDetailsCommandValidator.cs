using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Invelop.Domain.ContactDetails.Commands.Update;

public class UpdateContactDetailsCommandValidator : AbstractValidator<UpdateContactDetailsCommand>
{
    public UpdateContactDetailsCommandValidator()
    {
        this.RuleFor(c => c.FirstName)
            .NotEmpty();

        this.RuleFor(c => c.Surname)
            .NotEmpty();

        this.RuleFor(c => c.PhoneNumber)
            .Matches("^[0-9]*$");
    }
}
