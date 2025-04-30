import { faker } from '@faker-js/faker';

export function generateUserProfile() {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    bio: faker.lorem.sentence(),
  };
}

export function generateArticle() {
  return {
    title: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    body: faker.lorem.paragraphs(2),
    tags: [faker.word.adjective(), faker.word.noun()],
  };
}
