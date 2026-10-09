import {Page, expect} from '@playwright/test';
export class LoginPage{
    constructor (private readonly page:Page){}
    async goto():Promise<void>{
        await this.page.goto('/');
    }

    async login(username:string,password:string):Promise<void>{
        await this.page.getByTestId('username').fill(username);
        await this.page.getByTestId('password').fill(password);
        await this.page.getByTestId('login-button').click();
    }

    async expectError(text:string):Promise<void>{
        await expect(this.page.getByTestId('error')).toContainText(text);
    }
}
