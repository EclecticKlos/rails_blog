class ArticlesController < ApplicationController

  before_action :authenticate_user!, except: [:index, :show]

#   http_basic_authenticate_with name: "Dan", password: "ONLYoutletduringevenings",
# except: [:index, :show]

  def index
    @articles = Article.all.order('created_at DESC')
  end

  def show
    @article = Article.find(params[:id])
  end

  def new
    @article = Article.new
  end

  def edit
    @article = Article.find(params[:id])
  end

  def create
    @article = Article.new(article_params)

    if @article.save
      redirect_to @article
    else
      render 'new'
    end
  end

  def update
    @article = Article.find(params[:id])

    if @article.update(article_params)
      redirect_to @article
    else
      render 'edit'
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy

    redirect_to articles_path
  end

  private
    def article_params
      params.require(:article).permit(:title, :text)
    end
end


# index, show, new, edit, create, update and destroy
