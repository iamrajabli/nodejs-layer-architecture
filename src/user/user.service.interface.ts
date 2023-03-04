import {UserRegisterDto} from "./dto/user-register.dto";
import {User} from "./user.entity";
import {UserLoginDto} from "./dto/user-login.dto";
import {UserModel} from "@prisma/client";

export interface IUserService {
    createUser: (dto: UserRegisterDto) => Promise<UserModel | null>;
    validateUser: (data: UserLoginDto) => Promise<boolean>;
    getUserInfo: (email: string) => Promise<UserModel | null>;
}