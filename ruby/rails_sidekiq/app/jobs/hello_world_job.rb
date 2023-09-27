class HelloWorldJob < ApplicationJob
  queue_as :default

  def perform(*args)
    logger.info "hello world"
  end
end
