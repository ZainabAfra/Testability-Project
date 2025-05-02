
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_URL = 'https://api.realworld.io/api';

export async function createArticleViaAPI() {
  const token = process.env.AUTH_TOKEN!;
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
