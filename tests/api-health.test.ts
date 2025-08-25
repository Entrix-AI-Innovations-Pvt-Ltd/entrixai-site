import { GET } from '@/app/api/health/route';

describe('/api/health', () => {
  it('returns ok: true', async () => {
    const response = await GET();
    const data = await response.json();

    expect(data).toEqual({ ok: true });
    expect(response.status).toBe(200);
  });
});
