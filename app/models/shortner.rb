class Shortner < ApplicationRecord
    validates :url, presence: true, format: URI::regexp(%w[http https])
    validates :code, presence: true
    validates :short_url, presence: true, format: URI::regexp(%w[http https])
end