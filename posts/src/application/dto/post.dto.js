class PostDto {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
    toObject() {
        return {
            id: this.id,
            title: this.title
        }
    }
}
module.exports = PostDto;