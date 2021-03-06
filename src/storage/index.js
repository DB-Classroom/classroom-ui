let CryptoJS = require("crypto-js");
let key = process.env.REACT_APP_SECRET_KEY;

export function encryptData(data) {
    return CryptoJS.AES.encrypt(data, key).toString();
}

export function decryptData(data) {
    return CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8);
}

export const storeDetails = (res) => {
    let cipherPhoto = encryptData(res.data.data.photo);
    let cipherId = encryptData(res.data.data.customerId);
    localStorage.setItem("isLogged", res.data.success);
    localStorage.setItem("photo", cipherPhoto);
    localStorage.setItem("number", cipherId);
};

export const retriveDetails = () => {
    let val = localStorage.getItem("number");
    let pic = localStorage.getItem("photo");

    try {
        let id = decryptData(val);
        let photo = decryptData(pic);

        let result = {
            id: id,
            photo: photo,
        };

        return result;
    } catch (err) {
        return null;
    }
};