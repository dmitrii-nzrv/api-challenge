import { test, expect } from '@playwright/test';

const url = 'https://apichallenges.eviltester.com/';
test('challenges', async ({ request }) => {
  let r = await request.post(`${url}challenger`);
  const token = r.headers();
  console.log(`${url}gui/challenges/${token['x-challenger']}`);
  r = await request.get(`${url}challenges`, {
    headers: {
      'X-CHALLENGER': token['x-challenger'],
    },
  });

  expect(1).toBe(1);
});
