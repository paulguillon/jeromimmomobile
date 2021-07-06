import axios from 'axios';

const ENDPOINT_USER = "http://jeromimmo.fr/public/index.php/api/v1/";

export async function register(data){
    try{
        let res = await axios.post(ENDPOINT_USER + "users", data);

        return res.data;
    }catch (e) {
        throw handler(e)
    }
}

export async function login(login, password){
    try{
        let res = await axios.post(ENDPOINT_USER + "login", {
            emailUser: login,
            passwordUser: password
          });

        return res.data;
    }catch (e) {
        throw handler(e);
    }
}

export async function forgotPassword(data) {
    try {
        let res = await axios.post(ENDPOINT_USER, data);

        return res.data;
    } catch (e) {
        throw handler(e);
    }
}

export async function updateProfile(userId, data){
    try{
        const options = {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data"
            }
        };

        const form_data = new FormData();
        for ( let key in data )
            form_data.append(key, data[key]);

        let res = await axios.put(ENDPOINT_USER + "users/" + userId, form_data, options);
        return res.data;
    }catch (e) {
        throw handler(e);
    }
}

export function handler(err) {
    let error = err;

    if (err.response && err.response.data.hasOwnProperty("message"))
        error = err.response.data;
    else if (!err.hasOwnProperty("message")) error = err.toJSON();

    return new Error(error.message);
}