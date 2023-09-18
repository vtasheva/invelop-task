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

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var query = new GetContactDetailByIdQuery
        {
            Id = id
        };

        return Ok(await _mediator.Send(query));
    }

    [HttpPost]
    public async void Post([FromBody] AddContactDetailsCommand command)
    {
        await _mediator.Send(command);
    }

    [HttpPut("{id}")]
    public async void Put(int id, [FromBody] UpdateContactDetailsCommand command)
    {
        command.Id = id;
        await _mediator.Send(command);
    }

    [HttpDelete("{id}")]
    public async void Delete(int id)
    {
        var command = new DeleteContactDetailCommand
        {
            Id = id
        };

        await _mediator.Send(command);
    }
}
