class Shortner < ApplicationRecord
    validates_presence_of :url
    validates :url, format: URI::regexp(%w[http https])
end