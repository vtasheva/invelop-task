using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Invelop.Domain.ContactDetails.Commands.Add;

public class AddContactDetailsCommandValidator : AbstractValidator<AddContactDetailsCommand>
{
    public AddContactDetailsCommandValidator()
    {
        this.RuleFor(c => c.FirstName)
            .NotEmpty();

        this.RuleFor(c => c.Surname)
            .NotEmpty();

        this.RuleFor(c => c.PhoneNumber)
            .Matches("^[0-9]*$");
    }
}
