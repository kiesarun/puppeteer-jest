describe('Google Test', () => {
    it('should open google homepage', async () => {
        await page.goto('https://google.com')
        await page.waitFor(5000)
    })
})