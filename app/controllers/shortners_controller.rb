class ShortnersController < ApplicationController
    def index
        shortners = Shortner.all
        render status: :ok, json: {shortners: shortners}
    end

    def create
        @shortner = Shortner.new(shortner_params)
        if @shortner.save
            render status: :ok, json: {notice: "Link Saved"}
        else
            errors = @shortner.erroes.full_messages
            render status: :unprocessable_entity, json: { errors: errors  }
        end
        rescue ActiveRecord::RecordNotUnique => e
        render status: :unprocessable_entity, json: { errors: e.message }
    end

    private

    def shortner_params
        params.require(:shortner).permit(:url, :code)
    end
end
