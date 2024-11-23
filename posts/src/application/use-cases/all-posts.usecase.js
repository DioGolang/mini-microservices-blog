postRepository = require('../../infra/repositories/memory/post.respository');

const AllPostsUseCase = () => {
  return async () => {
    return postRepository.getAll();
  };
}
module.exports = AllPostsUseCase;