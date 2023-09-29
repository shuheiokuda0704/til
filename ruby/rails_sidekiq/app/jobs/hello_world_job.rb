class HelloWorldJob < ApplicationJob
  queue_as :high

  def perform(*args)
    logger.warn "hello world"
  end
end
