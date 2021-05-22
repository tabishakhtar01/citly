class ShortnersController < ApplicationController
    def index
        @shortner = Shortner.all
    end
end
