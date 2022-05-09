# Simple Google Sign-in MVC app with Node.JS and MongoDB as Database

This app shows you how to use
[Passport](https://www.passportjs.org/)
with [Express](https://expressjs.com/) to sign users in by sign-in service provided by [Google](https://www.google.com/).


You can Use this Application as a default starting for your own backend applications for web or mobile apps.

## Quick Start

To run this app, clone the repository and install dependencies:

```bash
git clone https://github.com/mahdyarmojtahed/google-oauth20-simple-app.git
cd google-oauth20-simple-app
npm install
```

This app requires OAuth 20 credentials from Google, which can be obtained by
[setting up](https://developers.google.com/identity/protocols/oauth2/openid-connect#appsetup)
a project in [Google API console](https://console.developers.google.com/apis/).
The redirect URI of the OAuth client should be set to `'http://localhost:3000/auth/google/callback`.

Once credentials have been obtained, create a `.env` file and add the following
environment variables:

```
PORT=3000 || __ANY_OTHER_PORT__
MONGO_URI=mongodb://localhost:27017/__DB_NAME__

GOOGLE_CLIENT_ID=__INSERT_CLIENT_ID_HERE__
GOOGLE_CLIENT_SECRET=__INSERT_CLIENT_SECRET_HERE__
```

Then Start the server.

```bash
npm run watch
```

Navigate to [`http://localhost:3000`](http://localhost:3000).

## Overview

This example illustrates how to use Passport and the [`passport-google-oauth20`](https://www.passportjs.org/packages/passport-google-oauth20/)
strategy within an Express application to sign users in with [Google](https://www.google.com)
via OAuth 2.0.


After users sign in, a login session is established and maintained between the
server and the browser with a cookie.  As authenticated users interact with the
app, the login state is restored by authenticating the session.
Also you may want to edit Session maxAge from app.js which now set to 1 Minute for Testing Purposes

## MVC Pattern
All the codes broken into serveral little parts so the application can easily scale up and add any other sing-in methods
Routes :

```
/auth for generic user purposes
/auth/google for google sign-in purposes
```

/auth/facebook can be next step to implement

## Credit

Created by [Mahdyar Mojtahed](https://www.mahdyarmojtahed.ir/)
