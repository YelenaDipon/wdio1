const HOST = `https://stage.pasv.us`;

const URL_REGISTER = `${HOST}/user/register`;
const URL_LOGIN = `${HOST}/user/login`;
const URL_DAYREPORT = '${HOST}/diary/create'
const email = Math.random().toFixed(4) + 'diponyelena@gmail.com';
const user = {
    firstName: 'Yelena',
    lastName: 'Dipon',
    email: email,
    password: "Kotya67",
    phone: 19169902185,
    about: 'About section',
    goal: 'Goals section'
};
const pageRegistration = {
    title: 'Progress Monitor',
    h1: 'User Register',
    description: 'Profiles with fictitious or dummy data will be deleted.',
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
    description: 'p',
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
module.exports = {URL_REGISTER, URL_LOGIN, user,pageRegistration,pageLogin,pageConfirmation,pageRegisterSelectors};
