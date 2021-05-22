class ShortnersController < ApplicationController
    def index
        shortners = Shortner.all
        render status: :ok, json: {shortners: shortners}
    end
end
