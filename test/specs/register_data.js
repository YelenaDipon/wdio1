const HOST = `https://stage.pasv.us`;
const user ={
    firstName: 'Yelena',
    lastName: 'Dipon',
    email: Math.random().toFixed(3) + 'diponyelena@gmail.com',
    password: "Kotya67",
    phone: 19169902185,
    about: 'About section',
    goal: 'Goals section'
};
const pageRegistration = {
    url: `${HOST}/user/register`,
    title: 'Progress Monitor',
    h1: 'User Register',
    p: 'Profiles with fictitious or dummy data will be deleted.',
    submitButton: 'Submit'
};
const pageLogin = {
    h1: 'User Login',
    url: `${HOST}/user/login`,
};
const pageConfirmation = {
    h1: 'You are a new user',
};
const pageRegisterSelectors = {
    h1: 'h1',
    desc: 'p',
    submitButton: 'form button[type="submit"]',
    firstNameInput: 'form input[name="firstName"]',
    lastNameInput: 'form input[name="lastName"]',
    phoneInput: 'form input[name="phone"]' ,
    emailInput: 'form input[name="email"]',
    passwordInput:'form input[name="password"]' ,
    about: 'form textarea[name="about"]',
    goals: 'form textarea[name="goals"]',
    language: 'form select[name="englishLevel"]',
};
module.exports = {user,pageRegistration,pageLogin,pageConfirmation,pageRegisterSelectors};
