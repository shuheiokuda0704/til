FROM ruby:3.0.2

ENV LANG C.UTF-8

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

WORKDIR /app

RUN gem install bundler -v "2.2.25"
RUN bundle install

ENTRYPOINT ["bash", "-c", "bundle exec rails db:create db:migrate db:seed && bundle exec rails server -b 0.0.0.0"]

# vim:ft=dockerfile