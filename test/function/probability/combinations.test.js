var assert = require('assert'),
    math = require('../../../index')(),
    combinations = math.combinations;

describe('combinations', function() {

  it('should calculate the combinations of a number taking k at a time', function() {
    assert.equal(combinations(0, 0), 1);
    assert.equal(combinations(7, 5), 21);
    assert.equal(combinations(20, 15), 15504);
    assert.equal(combinations(63, 7), 553270671);
  });

  it('should calculate the combinations of n items taken k at a time with BigNumbers', function() {
      assert.deepEqual(combinations(math.bignumber(7), math.bignumber(5)), math.bignumber(21));
      assert.deepEqual(combinations(math.bignumber(20), math.bignumber(15)), math.bignumber(15504));
  });

  it('should not work with non-integer and negative input', function() {
      assert.throws(function() {combinations(0.5, 3)});
      assert.throws(function() {combinations(3, 5)});
  });

  it('should not work with the wrong number or type of arguments', function() {
      assert.throws(function() {combinations(5, 3, 2)});
      assert.throws(function() {combinations(true, "hello world")});
  });


});
