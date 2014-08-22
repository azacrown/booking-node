var request = require('request');

var Booking = function() {};

Booking.prototype.base_url = 'https://distribution-xml.booking.com/json/';

Booking.prototype.init = function(params) {
    this.username = params.username,
    this.password = params.password;
}

Booking.prototype.hotelInfo = function(params, callback) {
    request.get(this.base_url + 'bookings.getHotels', {
        auth: {
            username: this.username,
            password: this.password,
            sendImmediately: false
        },
        strictSSL: false,
        qs:params
    }, function(err, req, body) {
        if(req.statusCode == 401) {
            var result = {error: "Authorization required"};
            callback(err, result);
            return;
        }
        var result = JSON.parse(body);
        callback(err, result);
    });
}

Booking.prototype.hotelFacilities = function(params, callback) {
    request.get(this.base_url + 'bookings.getHotelFacilities', {
        auth: {
            username: this.username,
            password: this.password,
            sendImmediately: false
        },
        strictSSL: false,
        qs:params
    }, function(err, req, body) {
        if(req.statusCode == 401) {
            var result = {error: "Authorization required"};
            callback(err, result);
            return;
        }
        var result = JSON.parse(body);
        callback(err, result);
    });
}

Booking.prototype.avail = function(params, callback) {
    params.include_internet = 1;
    request.get(this.base_url + 'bookings.getHotelAvailability', {
        auth: {
            username: this.username,
            password: this.password,
            sendImmediately: false
        },
        strictSSL: false,
        qs:params
    }, function(err, req, body) {
        if(req.statusCode == 401) {
            var result = {error: "Authorization required"};
            callback(err, result);
            return;
        }
        var result = JSON.parse(body);
        callback(err, result);
    });
};

Booking.prototype.block = function(params, callback) {
    request.get(this.base_url + 'bookings.getBlockAvailability', {
        auth: {
            username: this.username,
            password: this.password,
            sendImmediately: false
        },
        strictSSL: false,
        qs:params
    }, function(err, req, body) {
        if(req.statusCode == 401) {
            var result = {error: "Authorization required"};
            callback(err, result);
            return;
        }
        var result = JSON.parse(body);
        callback(err, result);
    });
}


Booking.prototype.rooms = function(params, callback) {
    request.get(this.base_url + 'bookings.getRooms', {
        auth: {
            username: this.username,
            password: this.password,
            sendImmediately: false
        },
        strictSSL: false,
        qs: params
    }, function(err, req, body) {
        if(req.statusCode == 401) {
            var result = {error: "Authorization required"};
            callback(err, result);
            return;
        }
        var result = JSON.parse(body);
        callback(err, result);
    });
}

Booking.prototype.info = function(params, callback) {
    request.get(this.base_url + 'bookings.getHotelDescriptionTranslations', {
        auth: {
            username: this.username,
            password: this.password,
            sendImmediately: false
        },
        strictSSL: false,
        qs: params
    }, function(err, req, body){
        if(req.statusCode == 401) {
            var result = {error: "Authorization required"};
            callback(err, result);
            return;
        }
        var result = JSON.parse(body);
        callback(err, result);
    });
}

Booking.prototype.photos = function(params,callback){
    request.get(this.base_url + 'bookings.getHotelPhotos', {
        auth: {
            username: this.username,
            password: this.password,
            sendImmediately: false
        },
        strictSSL: false,
        qs: params
    }, function(err, req, body) {
        if(req.statusCode == 401) {
            var result = {error: "Authorization required"};
            callback(err, result);
            return;
        }
        var result = JSON.parse(body);
        callback(err, result);
    });
}

Booking.prototype.roomPhotos = function(params, callback) {
    request.get(this.base_url + 'bookings.getRoomPhotos', {
        auth: {
            username: this.username,
            password: this.password,
            sendImmediately: false
        },
        strictSSL: false,
        qs: params
    }, function(err, req, body) {
        if(req.statusCode == 401) {
            var result = {error: "Authorization required"};
            callback(err, result);
            return;
        }
        var result = JSON.parse(body);
        callback(err, result);
    });
}

Booking.prototype.book = function(params, callback) {
    var booking_url = this.base_url.replace('distribution','secure-distribution');
    request.post(booking_url + 'bookings.processBooking', {
        auth: {
            username: this.username,
            password: this.password,
            sendImmediately: false
        },
        strictSSL: false,
        form: params
    }, function(err, req, body){
        if(req.statusCode == 401) {
            var result = {error: "Authorization required"};
            callback(err, result);
            return;
        }
        var result = JSON.parse(body);
        callback(err, result);
    });
}

Booking.prototype.booking = function(params, callback) {
    request.get(this.base_url + 'bookings.getBookingDetails', {
        auth: {
            username: this.username,
            password: this.password,
            sendImmediately: false
        },
        strictSSL: false,
        qs: params
    }, function(err, req, body) {
        if(req.statusCode == 401) {
            var result = {error: "Authorization required"};
            callback(err, result);
            return;
        }
        var result = JSON.parse(body);
        callback(err, result);
    });
}

module.exports = new Booking();