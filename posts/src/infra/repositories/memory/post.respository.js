const posts = {};

const postMemoryRepository = {
    create: async (id, post) => {
        return posts[id] = post;
    },
    getAll: async () => {
        return posts;
    }
};
module.exports = postMemoryRepository;