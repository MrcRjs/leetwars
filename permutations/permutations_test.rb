require 'test/unit'
require 'permutations'

class Simple < Test::Unit::TestCase
  def setup
    # Do nothing
  end

  def teardown
    # Do nothing
  end

  def test
    pend 'Not implemented'
    assert_equal [
                     [1,2,3],
                     [1,3,2],
                     [2,1,3],
                     [2,3,1],
                     [3,1,2],
                     [3,2,1]
                 ], [1,2,3]
  end
end