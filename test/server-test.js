var request = require('request');
var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('chai').should();
var testData = require('./test-config.json');
console.log("\n\n---------------testData----------");
console.log(testData);
describe('Server Test Cases', function () {
    before(function () {
        if (!(testData.URL)) {
            this.skip();
        }
    });

    after(function(){

    });

    it('#Success Case', function (done) {
        var req = {
            url: testData.URL,
            method: 'POST',
            body: {
                "name" : "Shweta"
            },
            json: true
        }
        request(req, function (err, res) {
            console.log("\n\n\n************ err- res **************");
            console.log(err);
            console.log(res.body);
            assert.isNull(err, 'Expected err to be null, but its not null');
            assert.isNotNull(res, 'Expected non-null response, but got null');
            assert.equal(res.statusCode, 200, 'Expected status 200 but got ' + res.statusCode);
			assert.equal(res.body.message, "Hiee Shweta!! Welcome to sample server!!");
            done();
        });
    });

    it('#Error Case - mandatory field missing', function (done) {
        var req = {
            url: testData.URL,
            method: 'POST',
            body: {
				"name":""
            },
            json: true
        }
        request(req, function (err, res) {
            console.log("\n\n\n************ err- res **************");
            console.log(err);
            console.log(res.body);
            assert.isNotNull(res, 'Expected non-null response, but got null');
            assert.equal(res.statusCode, 400, 'Expected status 400 but got ' + res.statusCode);
            assert.equal(res.body.error, 'Mandatory field missing', 'Expected mandatory field missing error but got '+res.body);
            done();
        });
    });
});