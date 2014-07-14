using System.Collections.Generic;
using e_library.Model;

namespace e_library.Core
{
    public interface IBook
    {
        IEnumerable<Book> GetAll();
    }
}
