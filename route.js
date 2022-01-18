const myaccount = require('./Controllers/myaccount');
const home = require('./Controllers/home');
const signup = require('./Controllers/signup');
const browse = require('./Controllers/browse');
module.exports = {
    '/signup': {
        controller: signup,
        action: 'signup'
    },
    '/login': {
        controller: signup,
        action: 'login'
    },
    '/mobileLogin': {
        controller: signup,
        action: 'mobileLogin'
    },
    '/forgotpassword': {
        controller: signup,
        action: 'forgotpassword'
    },
    '/home': {
        controller: home,
        action: 'home'
    },
    '/myprofile': {
        controller: myaccount,
        action: 'myprofile'
    },
    '/changepassword': {
        controller: myaccount,
        action: 'changepassword'
    },
    '/history': {
        controller: home,
        action: 'history'
    },
    '/songs': {
        controller: home,
        action: 'songs'
    },
    '/albums': {
        controller: home,
        action: 'albums'
    },
    '/browse': {
        controller: browse,
        action: 'browse'
    },
    '/NewReleases': {
        controller: browse,
        action: 'NewReleases'
    },
    '/Charts': {
        controller: browse,
        action: 'charts'
    },
    '/TopPlaylists': {
        controller: browse,
        action: 'TopPlaylists'
    },
}