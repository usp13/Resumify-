// AXIOS Package os used to communicate b/w front end and back end 

import axios from 'axios' ; 

// this can be used as a base

// const api = axios.create({
//     baseURL="https://localhost:3000" , 
//     withCredentials:true 
// })

// Export function for Register
export async function register({username , email , password } ) {
    
    try {

        const response = await axios.post('http://localhost:3000/api/auth/register', {
        username , email , password
        } , {
        withCredentials: true 
        // allows the frontend to get cookies too 
        
        })

        return response.data 

    }

     catch (err) {
        console.error(err);
        throw err;
    }
   
}

// Export function for Login
export async function login({ email, password }) {
    try {
        const response = await axios.post(
            "http://localhost:3000/api/auth/login",
            { email, password },
            { withCredentials: true }
        );

        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// export async function login({ email, password }) {
    
//     try {

//         const response = await axios.post('http://localhost:3000/api/auth/login', {
//         email , password
//         } , {
//             withCredentials: true 
//             // allows the frontend to get cookies too 
//         })

//         return response.data 

//     }

//     catch (err) {
//         console.log(err)
//     }
   
// }

// Export function for Logout
export async function logout() {
    try {
        const response = await axios.get(
            "http://localhost:3000/api/auth/logout",
            {
                withCredentials: true,
            }
        );

        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// Export function for Get-Me
export async function getme() {
    try {
        const response = await axios.get(
            "http://localhost:3000/api/auth/getme",
            {
                withCredentials: true,
            }
        );

        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}


