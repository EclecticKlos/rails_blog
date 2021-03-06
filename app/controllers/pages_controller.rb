class PagesController < ApplicationController
  def about
  end

  def index
    def order_image_urls()
      image_urls = []
      dir = "/Users/dan/Desktop/railsBlog/blog/app/assets/images/nav_adjust"
      files = Dir.foreach(dir).select { |x| File.file?("#{dir}/#{x}") }
      # Remove ".DS_Store"
      files.select! {|file|
        if file != ".DS_Store"
          file
        end
      }
      # Order files properly and shovel into array
      files.each {|file| file.slice!("scene")}.each {|file| file.slice!(".jpg")}.sort_by!(&:to_i)
      files.each {|file| file.insert(0,"nav_adjust/scene")}.each {|file| file.insert(file.length,".jpg")}
      files.each {|file| image_urls << Rails.application.assets.find_asset(file).digest_path}
      image_urls
    end
    @image_urls = order_image_urls
  end

end
