using System.Collections.Generic;
using e_library.Model;

namespace e_library.Data.Core
{
    public interface IRepository<TEntity> where TEntity : Entity
    {
        IEnumerable<TEntity> GetAll();
        TEntity Get(int id);
        TEntity Add(TEntity entity);
        TEntity Edit(TEntity entity);
        void Delete(int id);
    }
}
