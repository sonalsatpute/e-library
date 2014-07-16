using System;
using System.Collections.Generic;
using System.Linq;
using e_library.Data.Core;
using e_library.Model;

namespace e_library.Data.InMemory
{
    public class BookRepository : IBookRepository
    {
        private readonly List<Book> _books = new List<Book>();
        private int _bookId = 1;

        public BookRepository()
        {
            Add(new Book { Title = "Patterns of Enterprise Application Architecture", ISBN = "0321127420", Author = "Martin Fowler" });
            Add(new Book { Title = "Design Patterns: Elements of Reusable Object-Oriented Software", ISBN = "0201633612", Author = "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides" });
            Add(new Book { Title = "Domain-Driven Design: Tackling Complexity in the Heart of Software", ISBN = "0321125215", Author = "Eric Evans" });
            Add(new Book { Title = "Clean Code: A Handbook of Agile Software Craftsmanship", ISBN = "0132350882", Author = "Robert C. Martin" });
            Add(new Book { Title = "Refactoring: Improving the Design of Existing Code", ISBN = "0201485672", Author = "Martin Fowler, Kent Beck, John Brant" });
            Add(new Book { Title = "Refactoring to Patterns", ISBN = "0321213351", Author = " Joshua Kerievsky" });
            Add(new Book { Title = "Working Effectively with Legacy Code", ISBN = "0131177052", Author = "Michael Feathers" });
            Add(new Book { Title = "The Art of Unit Testing: With Examples in .Net", ISBN = "1933988274", Author = "Roy Osherove" });
            Add(new Book { Title = "Dependency Injection in .NET", ISBN = "1935182501", Author = "Mark Seemann" });
            Add(new Book { Title = "The Clean Coder: A Code of Conduct for Professional Programmers", ISBN = "9780137081073", Author = "Robert C. Martin" });
        }

        public IEnumerable<Book> GetAll()
        {
            return _books.OrderBy(b => b.Title);
        }

        public Book Get(int id)
        {
            return _books.Find(b => b.Id == id);
        }

        public Book Add(Book book)
        {
            if (book == null ) throw new ArgumentNullException("book");
            
            book.Id = _bookId++;
            _books.Add(book);

            return book;
        }

        public Book Edit(Book book)
        {
            if (book == null) throw new ArgumentNullException("book");

            int index = _books.FindIndex(b => b.Id == book.Id);
            if (index == -1) throw new Exception("Book not found");

            _books.RemoveAt(index);
            _books.Add(book);

            return book;
        }

        public bool Delete(int id)
        {
            return _books.RemoveAll(b => b.Id == id) > 0;
        }
    }
}