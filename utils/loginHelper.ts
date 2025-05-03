import { LoginPage } from '../pages/login.page';
import { generateUser } from './testData';


class LoginHelper{
    private page: any;

    constructor(page: any){
        this.page = page;
    }

    async loginToTheApp(){
        await this.page.goto('https://conduit.bondaracademy.com/login');
        const loginPage = new LoginPage(this.page);
        await loginPage.loginToApplication(generateUser().login.email, generateUser().login.password);
}
}
export default LoginHelper;