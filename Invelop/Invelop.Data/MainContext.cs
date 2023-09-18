using Invelop.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Invelop.Data;

public class MainContext : DbContext
{
    private readonly IConfiguration _configuration;

    public MainContext(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var connectionString = _configuration.GetConnectionString("MainConnectionString");
        optionsBuilder.UseSqlServer(connectionString);
        base.OnConfiguring(optionsBuilder);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<ContactDetail>()
            .HasKey(x => x.Id);

        modelBuilder.Entity<ContactDetail>()
            .Property(x => x.DateOfBirth).HasColumnType("Date");
    }

    public DbSet<ContactDetail> ContactDetails { get; set; }
}
