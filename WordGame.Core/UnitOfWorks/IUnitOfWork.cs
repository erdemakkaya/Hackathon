using Microsoft.EntityFrameworkCore;
using System;
using WordGame.Core.Entities.Base.Interfaces;
using WordGame.Core.Repositories.Base.Interfaces;

namespace WordGame.Core.UnitOfWorks
{
	public interface IUnitofWork : IDisposable
	{
		IRepository<TEntity, TId> GetDefaultRepo<TEntity, TId>() where TEntity : class, IEntityBase<TId>;
		TRepo GetCustomRepository<TRepo>() where TRepo : class;
		void Commit();
		void Rollback();
		int SaveChanges(bool ensureAutoHistory = false);
	}
}
