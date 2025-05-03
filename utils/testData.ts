import { fakerEN as faker } from '@faker-js/faker';


export function generateUser() {
  return {
    login: {
      email: "TestQA10@gmail.com",
      password: "password123",
    }
  };
}


// export function generateArticle() {
//   return {
//     title:"Quality Assurance Testing: Ensuring Excellence in Software Development",
//     description:"Automation Testing ",
//     body:"Quality Assurance (QA) testing is a critical phase in the software development lifecycle, designed to ensure that applications meet specified requirements and perform reliably under diverse conditions. By systematically identifying defects, verifying functionality, and validating user experience, QA testing safeguards the integrity of the final product.",
//     tags: "Playwright, Automation, Testing, End-to-End",
//     editbody: "Test:Quality Assurance (QA) testing is a critical phase in the software development lifecycle, designed to ensure that applications meet specified requirements and perform reliably under diverse conditions. By systematically identifying defects, verifying functionality, and validating user experience, QA testing safeguards the integrity of the final product.",
//   };
// }

// Locale is already set via the import
export function generateArticle() {
  const title = faker.lorem.sentence();
  const description = faker.lorem.words(5);
  const body = faker.lorem.paragraphs(2);
  const editbody = `Edited: ${faker.lorem.paragraphs(2)}`;
  const tagsArray = faker.helpers.arrayElements([
    'Playwright', 'Automation', 'Testing', 'CI/CD', 'E2E', 'DevOps', 'QA'
  ], faker.number.int({ min: 1, max: 4 }));

  return {
    title,
    description,
    body,
    tags: tagsArray,
    editbody
  };
}


export function settings() {
  return {
    image: "https://api.realworld.io/images/smiley-cyrus.jpeg",
    username: "Afsar",
    bio: "I am a software engineer",
    email: "Testing@gamil.com",
    newPassword: "Testing123",
  }
}