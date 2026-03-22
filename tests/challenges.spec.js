import { test, expect } from '@playwright/test';

let token;
const url = 'https://apichallenges.eviltester.com/';

test.describe('Challenges', () => {
  test.beforeEach(async ({ request }) => {
    let r = await request.post(`${url}challenger`);
    token = r.headers();
    console.log(`${url}gui/challenges/${token['x-challenger']}`);
  });

  test('№2', async ({ request }) => {
    let r = await request.get(`${url}challenges`, {
      headers: {
        'X-CHALLENGER': token['x-challenger'],
      },
    });

    expect(1).toBe(1);
  });
});
