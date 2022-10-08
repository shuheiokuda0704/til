class ApplicationController < ActionController::Base
  include FirebaseAuthenticator
  before_action :authenticate

  class AuthenticationError < StandardError; end
  rescue_from AuthenticationError, with: :not_authenticated
  rescue_from InvalidTokenError, with: :invalidated_token

  def authenticate
    payload = decode(request.headers["Authorization"]&.split&.last)
    raise AuthenticationError unless current_user(payload["user_id"])
  end

  def current_user(user_id = nil)
    @current_user ||= User.find_by(uid: user_id)
  end

  private

  def not_authenticated
    render json: { error: { messages: ["ログインしてください"] } }, status: :unauthorized
  end

  def invalidated_token
    render json: { error: { messages: ["トークンが不正です"] } }, status: :unauthorized
  end
end
