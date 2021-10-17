module Mutations
  class CreatePost < BaseMutation
    field :post, Types::PostType, null: false

    argument :body, String, required: true
    argument :title, String, required: true

    def resolve(**params)
      post = Post.create!(params)
      { post: post }
    end
  end
end
