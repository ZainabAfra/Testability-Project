
import axios from 'axios';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const API_URL = process.env.API_URL!;

async function loginAndStoreToken() {
  const email = process.env.EMAIL!;
  const password = process.env.PASSWORD!;

  const response = await axios.post(`${API_URL}/users/login`, {
    user: { email, password },
  });

  const token = response.data.user.token;

  // Optional: write token to .env for reuse
  const envPath = path.resolve(__dirname, '../.env');
  const envContents = fs.readFileSync(envPath, 'utf-8');
  const updatedEnv = envContents.replace(/AUTH_TOKEN=.*/g, `AUTH_TOKEN=${token}`);
  fs.writeFileSync(envPath, updatedEnv);

  return token;
}

export async function createArticleViaAPI() {
  let token = process.env.AUTH_TOKEN;

  if (!token || token.trim() === '') {
    token = await loginAndStoreToken();
  }

  const res = await axios.post(
    `${API_URL}/articles`,
    {
      article: {
        title: 'Test API Article',
        description: 'desc',
        body: 'body content',
        tagList: ['test'],
      },
    },
    { headers: { Authorization: `Token ${token}` } }
  );

  return res.data.article.slug;
}
