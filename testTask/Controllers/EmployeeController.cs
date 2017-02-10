using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using testTask.Models;

namespace testTask.Controllers
{
    [RoutePrefix("api/employee")]
    public class EmployeeController : ApiController
    {
        [AllowAnonymous]
        public async Task<IHttpActionResult> Get()
        {
            using (var db = new EmployeeContext())
            {
                var result = db.Employees.Select(t => t).ToList();
                return Ok(result);
            }
        }

        [AllowAnonymous]
        public async Task<IHttpActionResult> Delete(Guid id)
        {
            using (var db = new EmployeeContext())
            {
                var employee = db.Employees.Find(id);
                if (employee == null)
                    throw new Exception();

                db.Employees.Remove(employee);
                db.SaveChanges();
                return Ok();
                
            }
            return null;
        }

        [AllowAnonymous]
        public async Task<IHttpActionResult> Post(Employee model)
        {
            using (var db = new EmployeeContext())
            {
                model.Id = Guid.NewGuid();
                db.Employees.Add(model);
                db.SaveChanges();
            }
            return Ok();
        }
    }
}
