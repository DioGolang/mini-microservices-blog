class PostException extends Error {
    constructor(message, status = 400, code = 'POST_ERROR') {
        super(message);
        this.code = code;
        this.status = status;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor());
    }
}
module.exports = PostException;