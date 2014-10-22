Parse.initialize("Hgs9sEUpdEvIzwFojMJyx34H1zY5Rwi1TMD45Rha", "CICcrctDDxvs2xgD8BpwrSldNRNpdc91bbCC64F1");

var Blog = Parse.Object.extend("Blog");

var Blogs = Parse.Collection.extend({
    model: Blog
});

var blogs = new Blogs();

blogs.fetch({
    success: function (blogs) {
        blogs.each(function (object) {
            console.log(object);
            console.log(object.get("title"))
        });

    },
    error: function (blogs, error) {
        console.log(error);
    }
});

var blogView = Parse.View.extend({
    template: Handlebars.complile($('#blogs-tpl').html()),
    render: function() {
        var collection = { blog: this.collection.toJSON() };
        this.$el.html(this.template(collection));
    }
});

