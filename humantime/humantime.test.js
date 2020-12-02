const assert = require('assert');
const { it } = require('mocha');
const { humantime } = require('./humantime')

describe('Human readable translation', () => {

  describe('now', () => {
    it('should print now if input is 0 seconds', () => {
      assert.strictEqual(humantime(0), "now");
    });
  });

  describe('only seconds', () => {
    it('should print the time in a human readable way', () => {
      assert.strictEqual(humantime(1), "1 second");
    });

    it('should print the time for 2 sec in a human readable way', () => {
      assert.strictEqual(humantime(2), "2 seconds");
    });

    it('should print the time for 40 sec in a human readable way', () => {
      assert.strictEqual(humantime(40), "40 seconds");
    });
  });

  describe('only minutes', () => {
    it('should print minutes in a human readable way', () => {
      assert.strictEqual(humantime(60), "1 minute");
    });

    it('should print minutes in a human readable way', () => {
      assert.strictEqual(humantime(180), "3 minutes");
    });

    it('should print minutes in a human readable way', () => {
      assert.strictEqual(humantime(600), "10 minutes");
    });
  });

  describe('minutes + seconds', () => {
    it('should print a combination of minutes plus seconds', () => {
      assert.strictEqual(humantime(62), "1 minute and 2 seconds");
    });

    it('should print a combination of minutes plus seconds', () => {
      assert.strictEqual(humantime(330), "5 minutes and 30 seconds");
    });

  });

  describe('only hours', () => {
    it('should print a human readable hour', () => {
      assert.strictEqual(humantime(3600), "1 hour");
    });

    it('should print a human readable hours', () => {
      assert.strictEqual(humantime(36000), "10 hours");
    });
  });

  describe('hours + minutes + seconds', () => {
    it('should print a combination of minutes plus seconds', () => {
      assert.strictEqual(humantime(3662), "1 hour, 1 minute and 2 seconds");
    });
  });

  describe('hours + minutes + seconds', () => {
    it('should print a combination of minutes plus seconds', () => {
      assert.strictEqual(humantime(43639324), "1 year, 140 days, 2 hours, 2 minutes and 4 seconds");
    });
  });

});
