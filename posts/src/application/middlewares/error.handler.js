const PostException = require("../../domain/exceptions/post.exception");

const ErrorHandler = (err, req, res, next) => {

    if(err instanceof PostException) {
        return res.status(err.status).json({errors: [err.message] })
    }
    res.status(500).json({ errors: ['an internal server error occurred'] });
}
module.exports = ErrorHandler;