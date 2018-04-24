'use strict';
const Code   = require('code');
const Lab    = require('lab');
const lab    = exports.lab = Lab.script();
const Server = require('../../app.js');

lab.experiment('Basic HTTP Tests', () => {

    lab.test('Greets /hello/sheetesh} ', (done) => {

        const options = {
            method: 'GET',
            url: '/hello/Sheetesh'
        };

        Server.inject(options, ( response ) => {

            Code.expect(response.statusCode).to.equal(200);
            Code.expect(response.result).to.equal('Hello, Sheetesh!');
            done();
        });
    });

    lab.test('Greets /hello/Sheetesh%20Rath} ', (done) => {

        const options = {
            method: 'GET',
            url: '/hello/Sheetesh%20Rath'
        };

        Server.inject(options, ( response ) => {

            Code.expect(response.statusCode).to.equal(200);
            Code.expect(response.result).to.equal('Hello, Sheetesh Rath!');
            done();
        });
    });

});
