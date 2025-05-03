
const elementsforCreateArticle = {
    createArticleButton: "//a[@routerlink='/editor']",
    title: 'input[placeholder="Article Title"]',
    description: 'input[placeholder="What\'s this article about?"]',
    body: 'textarea[placeholder="Write your article (in markdown)"]',
    tags: 'input[placeholder="Enter tags"]',
    publishButton: "//button[contains(text(),'Publish Article')]",
    articleTitle: "a.preview-link",
    editButton: "div[class='container'] a[class='btn btn-sm btn-outline-secondary']",
    editbody: "textarea[placeholder='Write your article (in markdown)']",
    deleteButton: "div[class='container'] button[class='btn btn-sm btn-outline-danger']",
}
export default elementsforCreateArticle