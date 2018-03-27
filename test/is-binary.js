'use strict';

const isBinary = require('../lib/is-binary');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('is-binary', function() {

  it('handles charset', function() {
    const result = isBinary({ ['content-type']: 'application/json; charset:utf-8' }, {
      binary: ['application/json']
    });

    expect(result).to.be.true;
  });

  it('force to false', function() {
    const result = isBinary({}, {
      binary: false
    });

    expect(result).to.be.false;
  });

  it('custom function', function() {
    const stub = sinon.stub().returns(true);
    const result = isBinary({}, {
      binary: stub
    });

    expect(result).to.be.true;
    expect(stub.calledOnce).to.be.true;
  });

});