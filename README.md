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
Booking.avail({}, callback); //Get hotels with availability
Booking.block({}, callback); //Get blocks of availability
Booking.info({}, callback); //Get hotel info
Booking.photos({}, callback); //Get hotel photos
Booking.book({}, callback); //Make a booking
Booking.booking({}, callback); //Get info of booking
```

## Examples

See test.js for examples.
