module Types
  module Inputs
    class PostInputType < Types::BaseInputObject
      argument :id,     Int,    required: true
      argument :body,   String, required: false
      argument :title,  String, required: false
    end
  end
end