import { Base, Config } from "../base";
import { User, NewUser } from "./type";

const resourceName = "users";

export class Users extends Base {
    constructor(config: Config) {
        super(config);
    }

    getUserById(id: number): Promise<User> {
        return this.request<User>(`/${resourceName}/${id}`);
    }

    getUsers(): Promise<User[]> {
        return this.request<User[]>(`/${resourceName}`);
    }

    createUser(newUser: NewUser): Promise<User> {
        return this.request<User>(`/${resourceName}`, {
            method: "POST",
            body: JSON.stringify(newUser),
        });
    }
}
