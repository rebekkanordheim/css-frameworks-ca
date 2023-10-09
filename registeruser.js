const API_BASE_URL = 'https://nf-api.onrender.com';

// End points
// Register: /api/v1/social/auth/register

//------------ Registers User 
/**
 * API call that registers the user
 * @param {string} url 
 * @param {any} userData 
 * ```js
 * registerUser(registerURL, userToRegister);
 * ```
 */

async function registerUser(url, userData) {
    console.log(url, userData);
    try {
        // do API call
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(url, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}

const userToRegister = {
    name: 'rebekka_nordheim',
    email: 'rebekka_nordheim@stud.noroff.no',
    password: 'secure123',
};

const registerURL = `${API_BASE_URL}/api/v1/social/auth/register`;

registerUser(registerURL, userToRegister);