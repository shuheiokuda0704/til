FROM ruby:3.0.2

ENV LANG C.UTF-8

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

WORKDIR /app

RUN gem install bundler -v "2.2.25"
RUN bundle install
# vim:ft=dockerfile