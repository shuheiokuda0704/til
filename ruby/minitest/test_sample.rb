require 'minitest/autorun'

class Sample
  def self.greeting
    'Hello, world!'
  end
end

class TestSample < Minitest::Test
  def test_greeting
    assert_equal 'Hello, world!', Sample.greeting
  end
end