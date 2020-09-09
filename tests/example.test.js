import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import TopBar from "../pages/components/TopBar"
import FeedbackPage from "../pages/FeedbackPage"

describe('Example', () => {
    let homePage
    let feedbackPage
    let topbar

    beforeAll(async () => {
        jest.setTimeout(15000)
        homePage = new HomePage()
        feedbackPage = new FeedbackPage()
        topbar = new TopBar()
    })

    it('homePage should work', async() => {
        await homePage.visit()
    })

    it('navbar should be displayed ', async() => {
        await homePage.isNavbarDisplayed()
        await topbar.isTopBarDisplayed()
    })

    it('feedback should work', async() => {
        await feedbackPage.visit()
        await feedbackPage.isFeedbackFormDisplayed()
        await feedbackPage.submitFeedback(
            "Johny",
            "johnyTheSales@email.com",
            "subject",
            "comment"
        )
        await feedbackPage.wait(17000)
    })
})