import { Base, Config } from "../base";
import { Post, NewPost } from "./type";

const resourceName = "posts";

export class Posts extends Base {
    constructor(config: Config) {
        super(config);
    }

    getPostById(id: number): Promise<Post> {
        return this.request<Post>(`/${resourceName}/${id}`);
    }

    getPosts(): Promise<Post[]> {
        return this.request<Post[]>(`/${resourceName}`);
    }

    createPost(newPost: NewPost): Promise<Post> {
        return this.request(`/${resourceName}`, {
            method: "POST",
            body: JSON.stringify(newPost),
        });
    }
}
