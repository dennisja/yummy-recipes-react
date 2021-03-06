import Requests from './Requests';
import Configs from '../configs/Configs';

class User extends Requests {
    static loginUser(userData) {
        const {baseUrl, loginUrl} = Configs.api;
        const {email, password} = userData;
        
        return User.axios({
            method: "POST",
            url: `${baseUrl}${loginUrl}`,
            auth: {
                username: email,
                password: password
            }
        });
    }

    static registerUser(userData) {
        const {baseUrl, registerUrl} = Configs.api;
        return User
            .axios
            .post(`${baseUrl}${registerUrl}`, userData);
    }

    static getUserDetails(userId) {
        // gets the user details
        const {users} = Configs.api;
        return User
            .axiosInstance
            .get(`${users}${userId}/`);
    }

    static changeUserPassword(passwordData) {
        // changes the user password
        return User
            .axiosInstance
            .patch(Configs.api.users, passwordData);
    }

    static editUserDetails(newUserData) {
        return User
            .axiosInstance
            .put(Configs.api.users, newUserData);
    }
}

export default User;
