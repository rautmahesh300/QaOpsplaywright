export class login {
    constructor(page)
    {
        this.page = page;
        this.email = page.locator('#userEmail')
        this.password = page.locator('#userPassword')
        this.login= page.locator('#login')
    }
    async login(email,password)
    {
        await this.email.fill(email)
        await this.password.fill(password)
        await this.login.click()
    }
}