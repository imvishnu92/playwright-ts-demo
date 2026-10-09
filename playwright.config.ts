import {defineConfig} from '@playwright/test';
export default defineConfig({
    fullyParallel:true,
    reporter:[['list'],['html',{open:'never'}]],
    use:{
        headless : false,
        baseURL:'https://www.saucedemo.com',
        testIdAttribute:'data-test',
        screenshot:'only-on-failure'
    },
});