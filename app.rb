require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :index
end

get '/contact' do
  erb :contact
end
