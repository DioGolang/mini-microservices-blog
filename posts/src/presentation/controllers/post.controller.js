const createPostUseCase = require("../../application/use-cases/create-post.usecase");
const postMemoryRepository = require("../../infra/repositories/memory/post.respository");

const PostController = {
   async create (req, res, next){
       const post = await createPostUseCase.execute(req.body.title);
       return res.status(201).json(post.toObject());
   },
    async getAll (req, res, next) {
        const posts = await postMemoryRepository.getAll();
        return res.status(200).json(posts);
    }
}
module.exports = PostController;