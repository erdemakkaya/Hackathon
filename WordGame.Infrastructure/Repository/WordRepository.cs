using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Threading.Tasks;
using WordGame.Core.Entities;
using WordGame.Core.Repositories;
using WordGame.Infrastructure.Data;
using WordGame.Infrastructure.Repository.Base;

namespace WordGame.Infrastructure.Repository
{
	public class WordRepository : Repository<Word,int, WordGameContext>, IWordRepository
	{
		public WordRepository(WordGameContext dbContext) : base(dbContext)
		{
		}
		public async Task<IEnumerable<Word>> GetRandomWordsAsync(int count)
		{
			var randomEntities =  await GetRandomlyAsync(count);
			return randomEntities;
		}

		public async Task<Word> GetWordByNameAsync(string name)
		{
			var entity = await FirstOrDefaultAsync(x => x.WordName.ToLower().Equals(name.ToLower()));
			return entity;
		}

		public Task<IEnumerable<Word>> GetWordsByNameAsync(string name)
		{
			throw new NotImplementedException();
		}

		public async Task<IEnumerable<Word>> GetWordsByStatistic()
		{
			var entitites = await GetAsync(x => (x.TrueCount - (x.FalseCount + x.AddedCount)) < 20);
			return entitites;
		}

		public async Task<Word> IncreaseAddedWordCountAsync(string name)
		{
			var existEntity = await FirstOrDefaultAsync(x => x.WordName.ToLower().Equals(name.ToLower()));
			existEntity.AddedCount++;
			await UpdateAsync(existEntity);
			return existEntity;
		}
	}
}
