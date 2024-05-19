export async function getAllJob() {
    const res = await fetch('https://cms.s-loka.com/json/');
    if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
      try {
      const data = await res.json() as any
        return data.items
      } catch (error) {
        throw new Error('No job found')
      }
}