import { APIRequestContext } from '@playwright/test';

export async function createArticleViaAPI(user: { email: string; password: string }, article: any, apiRequest: APIRequestContext): Promise<string> {
  try {
    const loginResponse = await apiRequest.post('https://conduit.bondaracademy.com/api/users/login', {
      data: {
        user: {
          email: user.email,
          password: user.password,
        },
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (loginResponse.status() !== 200) {
      throw new Error(`Login failed with status code: ${loginResponse.status()}`);
    }

    const loginData = await loginResponse.json();
    const token = loginData.user.token;
    const articleResponse = await apiRequest.post(
      'https://conduit.bondaracademy.com/api/articles',
      {
        data: {
          article: {
            title: article.title,
            description: article.description,
            body: article.body,
            tags: article.tags,
          },
        },
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
        },
      }
    );

    if (articleResponse.status() !== 200) {
      throw new Error(`Failed to create article with status code: ${articleResponse.status()}`);
    }

    const articleData = await articleResponse.json();
    const slug = articleData.article.slug;

    return slug;
  } catch (error) {
    console.error('Error during API request:', error);
    throw error;
  }
}
