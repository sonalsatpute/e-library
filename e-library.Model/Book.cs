namespace e_library.Model
{
    public class Book : Entity
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string ISBN { get; set; }
        public string Author { get; set; }
    }
}
