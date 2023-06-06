# ASSESSMENT 6: Rails Commenting Challenge

# FILE: app/controller/blog_posts_controller.rb

# ---1) The class `BlogPostsController` is defined and inherits from the Application controller. It will then become the controlling for handling all the blog posting related actions.
class BlogPostsController < ApplicationController
  def index
    # ---2) This fetches all the blog post records from the db and assigns it to the instance variable @posts
    @posts = BlogPost.all
  end

  # ---3) This defines the show method and displays the details of a specific blog post
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This defines the new method and initializes a new instance in the model
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This creates and saves a new blog post record using the parameters obtained from the params and assigns the created object to @post
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) This gets a specified blog post from the db based on its assigned id and assigns it to the @post
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The update method triggers the db queries to update the record based on the provided params
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) This will redirect the user to the index page for blog posts after deleting a specific blog post
      redirect_to blog_posts_path
    end
  end

  # ---9) This designates certain methods that will only be used within this controller
  private
  def blog_post_params
    # ---10) This specifies the requirements for a blog post and ensures that only the permitted attributes (title and content) are used
    params.require(:blog_post).permit(:title, :content)
  end
end
