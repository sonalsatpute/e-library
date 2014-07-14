using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using e_library.Core;
using e_library.Model;

namespace e_library.WebApi.Controllers
{
    public class BookController : BaseApiController, IBook
    {
        public IEnumerable<Book> GetAll()
        {
            return GetDummyBooks();
        }
    }
}
