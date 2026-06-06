'use strict'
const User = require('./user') //require the model
const Comment = require('./comment')
const Post = require('./post')

async function init() {
await User.sync(); 
await Post.sync()
await Comment.sync()

};

init();

Post.belongsTo(User, {foreignKey: 'fk_posts_users'});
User.hasMany(Post, {foreignKey: 'fk_posts_users'});

module.exports = {
User, Post, Comment // export the model
// also export any extra models here
};