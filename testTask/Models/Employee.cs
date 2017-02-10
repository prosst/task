using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace testTask.Models
{
    public class Employee
    {
        public Guid Id { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public double Rate { get; set; }
        public string JobTitle { get; set; }
        public DateTime? EmploymentDate { get; set; }
    }

    class EmployeeContext : DbContext
    {
        public EmployeeContext()
            : base("DbConnection")
        { }

        public DbSet<Employee> Employees { get; set; }
    }
}