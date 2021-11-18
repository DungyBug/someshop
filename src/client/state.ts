import IUser from "./contracts/user";

class State {
    static user: IUser;
    static userLoggedIn: boolean; // сидит ли пользователь за аккаунтом или просто смотрит страницу
};

export default State;