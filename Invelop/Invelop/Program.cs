using Invelop.Data;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;

namespace Invelop.Api;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        //builder.Services.AddAutoMapper(typeof(Program));

        builder.Services.AddCors();

        builder.Services
            .AddControllers();

        builder.Services
            .AddDbContext<MainContext>();

        var app = builder.Build();

        app.UseHttpsRedirection();

        app.UseCors(builder =>
        {
            builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
        });

        //app.UseAuthentication();

        //app.UseAuthorization();

        app.MapControllers();

        EnsureDatabaseInitialized(app.Services);

        app.Run();
    }

    private static void EnsureDatabaseInitialized(IServiceProvider serviceProvider)
    {
        using var scope = serviceProvider.CreateScope();
        using var context = scope.ServiceProvider.GetService<MainContext>();

        context.Database.EnsureCreated();
        context.Database.Migrate();
    }
}
