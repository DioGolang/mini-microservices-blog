const PostDto = require("../dto/post.dto");
const idGenerator = require("../../infra/utils/id-generator");
const postMemoryRepository = require("../../infra/repositories/memory/post.respository");

const createPostUseCase = {
    execute: async (post) => {
        const id = idGenerator();
        await postMemoryRepository.create(id, post);
        return new PostDto(id, post);
    }
}
module.exports = createPostUseCase;