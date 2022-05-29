// CRUD routes/APIs

const Review = require("../models/Review");
const moment = require("moment");


// POST/GET/PUT/DELETE - save/retrieve/update/delete

// HTTP GET - load book entry form
exports.review_create_get = (req, res) => {
    res.render("review/add");
}

//HTTP POST - save entry into database
exports.review_create_post = (req, res) => {
    console.log(req.body);

    let review = new Review(req.body);

    review.save()
    .then(()=>{
        res.redirect("/review/index");
    })
    .catch(err => {
        console.log(err);
        res.send("Try again later :(")
    })
}

// HTTP GET - Bookshelf index - load all books
exports.review_index_get = (req, res) => {
    Review.find()
    .then(reviews => {
        res.render("review/index", {reviews, moment})
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP GET - specific review by ID
exports.review_show_get = (req, res) => {
    console.log(req.query.id);

    Review.findById(req.query.id)
    .then(review => {
        res.render("review/detail", {review, moment});
    })
    .catch(err =>{
        console.log(err)
    })
}

// HTTP DELETE - Delete review by ID
exports.review_delete_get = (req, res) => {
    console.log(req.query.id);
    Review.findByIdAndDelete(req.query.id)
    .then( () => {
        res.redirect("/review/index")
    })
    .catch(err => {
        console.log(err)
    })
}

// HTTP GET - Load review edit form
exports.review_edit_get = (req, res) => {

    Review.findById(req.query.id)
    .then((review) => {
        res.render("review/edit", {review})
    })
    .catch(err => {
        console.log(err)
    })
}

// HTTP PUT - Update review
exports.review_update_put = (req, res) => {
    console.log(req.body.id)
    Review.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/review/index");
    })
    .catch(err => {
        console.log(err)
    })
}