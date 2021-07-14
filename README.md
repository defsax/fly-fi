# Fly-Fi v1.0

<p align="center">
<img src="https://github.com/defsax/fly-fi/blob/master/frontend/public/images/fly-fi-logo2.png?raw=true" width="200" height="200" />
</p>

A flight tracking application, with personalized arrival notifications via SMS. Collaborative group project for Lighthouse Labs, web-development Bootcamp.

## Table of contents:

- [Description](#description)
  - [How it works](#how-it-works)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [API](#api)
- [Features](#app-features)
- [Screenshots](#screenshots)
- [Contributions](#contributions)
- [Dependencies](#dependencies)

## Description

Fly-Fi is a single page, full-stack application, designed to locate flights on a flexible map. It can also authenticate users, and send notifications before arrival. Designed to alert people, when a specific flight is arriving, or see what is currently in the sky around them. With a clean UI, the user is able to see flights real time. When authenticated, the user can save, and get notifications via SMS ahead of time, when a plane is coming in for a landing. The user can keep a list of the flights they want to track.

## How it works:

Fly-fi was built using React.js, Axios and Sass for the front-end, Ruby on Rails for the backend and postgreSQL for database management.

FLy-Fi also leverages three different API’s:

- [Aviation-Edge](https://aviation-edge.com/) for live flight tracking data
- [Google-Maps-API](https://developers.google.com/maps/) utilizing [google-map-react](https://github.com/google-map-react/google-map-react)
- [Twilio](https://www.twilio.com/) for SMS notification

## Getting Started

## Installation

Front-End

```
cd frontend
npm install
```

Back-End

```
cd backend
rvm install 2.5.8
rvm use default 2.5.8
bundle install

rake db:reset
rake db:migrate
```

### Start Front-End

- open a terminal for frontend

```
cd frontend
npm start
```

### Start Back-End

- open two terminals for backend
- Note: VagrantVM has psql installed; if you are not using vagrant to run the backend, you will need to have postgreSQL running on your machine.

#Terminal 1

```
cd backend
bin/rails s -b 0.0.0.0 -p 3001
```

#Terminal 2

```
cd backend
rake jobs:work
```

## Configuration:

## API:

### Front end:

- Copy the .env-example file in the frontend directory, and rename it to .env.

- google-map-react: download an API key from [Google-Maps-API](https://developers.google.com/maps/gmp-get-started#enable-api-sdk).
- Replace the API key with yours, after REACT_APP_GOOGLE_API.

### Backend:

- Copy the .env-example file in the backend directory, and rename it to .env.

- Aviation-Edge: download an API key from Avaiation-Edge. Replace the API key with yours, after AVIATION_API_KEY.

- Twilo: sign up for a trial account at Twilio.com - you will need a working phone number to verify and to do testing with. Get a Twilio number with SMS capability. (This quickstart video from Twilio can help you get started).
- Replace the account sid with yours after TWILIO_ACCOUNT_SID.
- Replace the auth tolken with yours after TWILIO_AUTH_TOKEN.
- Replace the twilio default number with yours after TWILIO_DEFAULT_NUMBER.
- Replace any verified numbers for testing after TEST_NUMBER_ONE.

# App Features

- Search for flights live by flight number, or by departure and arrival airports
- Map updates with planes being tracked.
- Click on any plane to see flight number, and departure/arrival locations.
- User authentication using bcrypt.
- Authenticated users can select flights for notifications, stored in database.
- SMS notifications that the plane is tracked for notification, and a notification that it is landing.
- List of user flights being tracked.

# Screenshots

<p align="center">
<img src="https://github.com/defsax/fly-fi/blob/development-mike/frontend/public/images/screenshots/Map1.png?raw=true" width="400" height="auto" />
</p>
<p align="center">
<img src="https://github.com/defsax/fly-fi/blob/development-mike/frontend/public/images/screenshots/Map2.png?raw=true" width="400" height="auto" />
</p>
<p align="center">
<img src="https://raw.githubusercontent.com/alibas01/Lighthouse-Final-Fly-Fi/master/frontend/public/images/screenshots/Tilte.png" width="400" height="auto" />
</p>


# Contributions

Pull requests are welcome. Please open an issue first to discuss what you would like to change

# Dependencies

- Ruby version 2.5.8
- Rails version 6.1.3
- postgreSQL 1.1
- Twilio-ruby
- Bundler 1.17.3
- Google-map-react
