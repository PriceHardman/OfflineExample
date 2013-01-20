require 'sinatra'

configure do
  mime_type :cache, 'text/cache-manifest' # Must be served with this MIME type
end

#the homepage will be blank except for two links: store and retrieve.

get '/' do
	erb :home
end

get '/save' do
	erb :save
end

get '/get' do
	erb :get
end

get '/manifest' do
  content_type :cache
  File.read('lawnchair_manifest.appcache')
end