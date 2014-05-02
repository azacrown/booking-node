Booking node.js wrapper
====

## Install

```
npm install booking-node
```

## Usage

```js
var Booking = require('booking');
Booking.init({username:'username',password:'password'});//Credentials booking
```

## Endpoints

```
Booking.avail({}, callback);
Booking.block({}, callback);
Booking.info({}, callback);
Booking.photos({}, callback);
Booking.book({}, callback);
Booking.booking({}, callback);
```