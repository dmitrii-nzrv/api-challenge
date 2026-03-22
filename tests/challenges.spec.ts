import { test, expect } from '@playwright/test';

const url = 'https://apichallenges.eviltester.com/';
test.only('challenge 1 - получить авторизованный токен', async ({ request }) => {
  let r = await request.post(`${url}challenger`);
  console.log(r);
  expect(1).toBe(1);
});
