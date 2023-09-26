using Invelop.Data.Models;
using Invelop.Domain.ContactDetails.Commands;
using Invelop.Domain.ContactDetails.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Invelop.Api.Controllers;
[Route("contactdetails")]
[ApiController]
public class ContactDetailsController : ControllerBase
{
    private readonly IMediator _mediator;

    public ContactDetailsController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var query = new GetAllContactDetailsQuery();
        
        return Ok(await _mediator.Send(query));
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> Get(int id)
    {
        var query = new GetContactDetailByIdQuery
        {
            Id = id
        };

        return Ok(await _mediator.Send(query));
    }

    [HttpPost]
    public async Task Post([FromBody] AddContactDetailsCommand command)
    {
        await _mediator.Send(command);
    }

    [HttpPut("{id}")]
    public async Task Put(int id, [FromBody] UpdateContactDetailsCommand command)
    {
        command.Id = id;
        await _mediator.Send(command);
    }

    [HttpDelete]
    public async Task Delete(int id)
    {
        var command = new DeleteContactDetailCommand
        {
            Id = id
        };

        await _mediator.Send(command);
    }
}
