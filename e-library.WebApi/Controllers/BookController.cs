using System.Collections.Generic;
using System.Web.Http;
using e_library.Data.Core;
using e_library.Data.InMemory;
using e_library.Model;

namespace e_library.WebApi.Controllers
{
    [RoutePrefix("api/books")]
    public class BooksController : ApiController
    {
        static readonly IBookRepository Repository = new BookRepository();

        [Route("")]
        public IEnumerable<Book> GetAll()
        {
            return Repository.GetAll();
        }

        [Route("{id}")]
        public IHttpActionResult Get(int id)
        {
            Book book = Repository.Get(id);
            if (book == null) return NotFound();

            return Ok(book);
        }

        [Route("")]
        public IHttpActionResult Post(Book book)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            Book newBook = Repository.Add(book);

            if (newBook == null) return Conflict();

            return Created<Book>(string.Format("{0}/{1}", Request.RequestUri, newBook.Id), newBook);
        }

        [Route("")]
        public IHttpActionResult Put(Book book)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            Book editBook = Repository.Edit(book);

            if (editBook == null) return Conflict();

            return Created<Book>(string.Format("{0}/{1}", Request.RequestUri, editBook.Id), editBook);
        }

        [Route("{id}")]
        public IHttpActionResult Delete(int id)
        {
            if (!Repository.Delete(id)) return NotFound();

            return Ok();
        }
    }
}
