import { getRequestContext } from '@cloudflare/next-on-pages';

export async function getAllJob() {
  const db = getRequestContext().env.POSTS_DB;
  console.log(db)
    const stmt = await db.prepare(`select * from items where status = 3`).all()
    
    if(!stmt) {
      return [] as any[]
    }

    return stmt.results
}