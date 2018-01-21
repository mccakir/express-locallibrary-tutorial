var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreScheme = new Schema ({
    name: { type: String, required: true, max: 100, min: 3}
});

// Virtual for genreschema's URL
GenreScheme
.virtual('url')
.get(function(){
    return '/catalog/genre/'+ this._id;
});

// Export model
module.exports = mongoose.model('Genre', GenreScheme);