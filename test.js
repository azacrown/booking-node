var Booking = require('./booking.js');

Booking.init({
    username: 'username',
    password:'password'
});

/*
//Return info of hotel(s)
Booking.hotelInfo({
    hotel_ids: '24177,78188',
    languagecodes: 'es'
}, function(err, resp){
    console.log('ERROR:', err);
    console.log('RESPUESTA:', resp);
});
*/

/*
//Return facilities of hotel(s)
Booking.hotelFacilities({
    hotel_ids: '24177,78188',
    languagecodes: 'es'
}, function(err, resp){
    console.log('ERROR:', err);
    console.log('RESPUESTA:', resp);
});
*/

/*
//Return availability of hotel(s)
Booking.avail({
    currency_code: 'MXN',
    latitude: '19.427037',
    longitude: '-99.167780',
    arrival_date: '2014-05-03',//YYYY-MM-DD
    departure_date: '2014-05-04',//YYYY-MM-DD
    available_rooms: 2,//cuantos cuartos disponibles
    guest_qty: '2,2',//# de guest por cuarto(array) el length de este campo debe coincidir con el valor de available_rooms
    show_test: 1
}, function(err, resp){
    console.log('ERROR:', err);
    console.log('RESPUESTA:', resp);
});
*/

/*
//Return block of availabilities of rooms
Booking.block({
    hotel_ids: '777196',//hotel test 98251, hotel live 777196
    languagecode: 'es',
    arrival_date: '2014-05-03',
    departure_date: '2014-05-04',
    currency_code: 'MXN',
    detail_level: 1,
    show_test: 1
}, function(err, resp){
    console.log('ERROR:', err);
    console.log('RESPUESTA:', resp);
});
*/

/*
//Return info of hotel
Booking.info({
    hotel_ids: '98251',//hotel test
    languagecode: 'es',
    show_test: 1
}, function(err, resp){
    console.log('ERROR:', err);
    console.log('RESPUESTA:', resp);
});
*/

/*
//Return photos of hotel
Booking.photos({
    hotel_ids: '98251',//Array of ids. Example: 98251,777196,472805
    show_test: 1
}, function(err, resp){
    console.log('ERROR:', err);
    console.log('RESPUESTA:', resp);
});
*/

/*
//Make a book
Booking.book({
    affiliate_id: '386216',//Affiliate id of lastroom
    affiliate_label: 'lastroom',
    hotel_id: '777196',//hotel test 98251
    begin_date: '2014-05-02',
    block_id: '77719602_83123991_0_1',
    incremental_prices: '39.00',
    end_date: '2014-05-03',
    cc_cardholder: 'Firstname Lastname',
    cc_cvc: '253',
    cc_expiration_date: '2017-06-01',//YYYY-MM-DD en vez del tipico MM-YYYY(el día es ignorado pero se debe pasar :s)
    cc_number: '4147202159108677',
    cc_type: '2',//AMEX:1,VISA:2,MASTERCARD:3
    guest_street: 'Zamora 187, Condesa',
    guest_zip: '06149',
    guest_city: 'Merida',
    guest_country: 'MX',
    guest_email: 'example@gmail.com',
    guest_telephone: '5522334455',
    guest_language: 'es',
    guest_name: 'Guest Lastname',
    guest_company: 'Compania opcional SA de CV',
    show_test: 1,
    comments: 'ESTO ES OPCIONAL'
    //booker_firstname: 'Guest', // Solo si 'guest_name' no es definido
    //booker_lastname: 'Lastname', //Solo si booker_firstname es definido
}, function(err, resp) {
    console.log('ERROR:',err);
    console.log('RESPUESTA:',resp);
});
*/

/*
Booking.booking({
    id: '897156933',//pincode:0453
    show_test: 1,
}, function(err, resp) {
    console.log('ERROR:',err);
    console.log('RESPUESTA:',resp);
});
*/
