import { test, expect } from '@playwright/test';

let token;
const url = 'https://apichallenges.eviltester.com/';

test.describe('Challenges', () => {
  // для того, чтобы воркер был только 1 и токен не пересоздавался
  test.describe.configure({ mode: 'serial' });

  test.beforeAll(async ({ request }) => {
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
  });

  test('№3', async ({ request }) => {
    let r = await request.get(`${url}todos`, {
      headers: {
        'X-CHALLENGER': token['x-challenger'],
      },
    });
  });

  test('№4', async ({ request }) => {
    let r = await request.get(`${url}todo`, {
      headers: {
        'X-CHALLENGER': token['x-challenger'],
      },
    });
  });

  test('№5', async ({ request }) => {
    let r = await request.get(`${url}todos/1`, {
      headers: {
        'X-CHALLENGER': token['x-challenger'],
      },
    });
  });
});
