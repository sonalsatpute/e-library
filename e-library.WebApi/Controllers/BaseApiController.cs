using System.Collections.Generic;
using System.Web.Http;
using e_library.Model;

namespace e_library.WebApi.Controllers
{
    public abstract class BaseApiController : ApiController
    {
        readonly List<Book> _books =  new List<Book>
            {
                new Book{ Id =1 , Title = "AngularJS",      ISBN = "123-456-789", Author ="Scott Alen"},
                new Book{ Id =2 , Title = "CSS - 3",        ISBN = "123-456-789", Author = "Scott Hanselman"},
                new Book{ Id =3 , Title = "HTML 5",         ISBN = "123-456-789", Author ="Jon Papa"},
                new Book{ Id =4 , Title = "Java Script",    ISBN = "123-456-789" ,Author ="Rock Ford"},
                new Book{ Id =5 , Title = "ASP.NET Web API", ISBN = "123-456-789", Author ="Phill Hack"},
            };

        protected IEnumerable<Book> GetDummyBooks()
        {
            return _books;
        }
    }
}