import {test, expect} from '../../fixtures';
test('valid user can log in', async({loginPage,page})=>{
    await loginPage.login('standard_user','secret_sauce');
    await expect(page).toHaveURL(/inventory/);
});

test('wrong password shows an error', async({loginPage,page})=>{
    await loginPage.login('standard_user', 'wrong_password');
    await loginPage.expectError('do not match');
});