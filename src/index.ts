import { Config } from "./base";
import { Users } from "./users";
import { Posts } from "./posts";
export class Library {
    users: Users;
    posts: Posts;
    constructor(config: Config) {
        this.users = new Users(config);
        this.posts = new Posts(config);
    }
}
