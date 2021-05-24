require "test_helper"

class ShortnerTest < ActiveSupport::TestCase
    def test_instance_of_shortner
        shortner = Shortner.new
      
        # See if object task actually belongs to Task
        assert_instance_of Shortner, shortner
      end

      def test_value_created_at
        shortner = Shortner.new(url: "https://google.com")
        assert_nil shortner.created_at
      
        shortner.save!
        assert_not_nil shortner.created_at
      end

      def test_error_raised
        assert_raises ActiveRecord::RecordNotFound do
          Shortner.find(SecureRandom.uuid)
        end
      end

      def test_count_of_number_of_shortners
        assert_difference ['Shortner.count'] do
          Shortner.create!(url: 'https://google.com')
        end
      end

end