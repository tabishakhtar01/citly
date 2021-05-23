class Shortner < ApplicationRecord
    # enum status: { unstarred: 0, starred: 1 }
    validates_presence_of :url
    validates :url, format: URI::regexp(%w[http https])

    # private

    # def self.organize
    #   starred = self.starred.order('updated_at DESC')
    #   unstarred = self.unstarred
    #   starred + unstarred
    # end
end