class ShortnersController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :load_shortner, only: [:show, :update]
    def index
        shortners = Shortner.all.order(status: :desc, created_at: :desc)
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

    def show
        @shortner.update_attribute(:count, @shortner.count + 1)
        render status: :ok, json: {  shortner: @shortner }
    end
    
    def update
        @shortner.update_attribute(:status, !@shortner.status)
        render status: :ok, json: {
          message: 'Link has been pinned'
        }
    end

    private

    def shortner_params
        params.require(:shortner).permit(:url, :code, :short_url, :status, :count)
    end

    def load_shortner
        @shortner = Shortner.find_by_code(params[:code])
        render json: {errors:  @shortner.errors.full_messages.to_sentence} unless @shortner
    end 
end
