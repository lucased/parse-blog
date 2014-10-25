Parse.$ = jQuery;

// Replace this line with the one on your Quickstart Guide Page
Parse.initialize("Hgs9sEUpdEvIzwFojMJyx34H1zY5Rwi1TMD45Rha", "CICcrctDDxvs2xgD8BpwrSldNRNpdc91bbCC64F1");

var Blog = Parse.Object.extend("Blog"),
    Blogs = Parse.Collection.extend({
        model: Blog
    }),
    BlogsView = Parse.View.extend({
        template: Handlebars.compile($('#blogs-tpl').html()),
        render: function () {
            var collection = { blog: this.collection.toJSON() };
            this.$el.html(this.template(collection));
        }
    });
blogs = new Blogs();

blogs.fetch({
    success: function (blogs) {
        var blogsView = new BlogsView({ collection: blogs });
        blogsView.render();
        $('.main-container').html(blogsView.el);
    },
    error: function (blogs, error) {
        console.log(error);
    }
});

$("#blogForm").on("submit", function(e){
    e.preventDefault();

    console.log("Handling the submit");

    var data = {};
    data.title = $("#blogTitle").val();
    data.content = $("#blogContent").val();

    console.log(data);
});
