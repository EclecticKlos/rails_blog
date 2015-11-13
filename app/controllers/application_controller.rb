class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  # require 'rubygems'
  # require 'json'

  # def background_frames
  #   assets = JSON.parse(params["frameFileNames"])
  #   assets_urls = assets.map do |name|
  #     if Rails.application.assets.find_asset(name)
  #       view_context.asset_url(name)
  #     else
  #       nil
  #     end
  #   end
  #   render json: assets_urls

  #   # p 99999
  #   # p images_to_get_fingerprinted_filenames
  #   # finger_printed_file_names = []

  #   # for i in 4..images_to_get_fingerprinted_filenames.size
  #   #   file = "scene" + i.to_s + ".jpg"
  #   #   p "* " * 80
  #   #   # p Rails.application.assets.find_asset(file)
  #   #   # finger_printed_file_names << Rails.application.assets.find_asset(file).digest_path
  #   #   finger_printed_file_names << view_context.asset_url(file)
  #   #   i += 3
  #   # end
  #   # p finger_printed_file_names
  #   # # finger_printed_file_names.to_json
  #   # redirect_to '/'
  # end


  protect_from_forgery with: :exception
end
