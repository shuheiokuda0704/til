module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :post, Types::PostType, null: false do
      description 'Find a post by ID'
      argument :id, ID, required: true
    end

    def post (id:)
      Post.find(id)
    end
  end
end
