import { useContext } from "react";

import { AuthContext } from "../auth.context";



// Importing all the 4 layers : register , login , logout , getme

import { login } from "../services/auth.api";
import { logout } from "../services/auth.api";
import { getme } from "../services/auth.api";
import { register } from "../services/auth.api";



export const useAuth = () => {

    const context = useContext(AuthContext)

    if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

    const { user, setuser, loading, setloading } = context

    // Loading screen - handles login
    const handleLogin = async ({ email, password }) => {
    setloading(true);

    try {
        const data = await login({ email, password });

        console.log("LOGIN RESPONSE:", data);

        if (!data) {
            throw new Error("No data returned from login");
        }

        setuser(data.user);
    } catch (err) {
        console.error(err);
    } finally {
        setloading(false);
    }
};

    // const handleLogin = async ({ email , password }) => {
        
    //     setloading(true)
    //     try {

    //         const data = await login({email , password })

    //         setuser( data.user )

    //     }

    //     catch(err){
    //         console.log(err)  
    //     }

    //     finally{

    //         setloading(false)

    //     }
        
    // }

    // Loading screen - Handles registration page 

    // const handleRegister = async ({username , email , password }) => {
        
    //     setloading(true)
    //     const data = await register({username , email , password})

    //     setuser(data.user)
    //     setloading(false)

    // }
    
    const handleRegister = async ({
            username,
            email,
            password,
            }) => {
            try {
                setloading(true);

                const data = await register({
                username,
                email,
                password,
                });

                setuser(data.user);

                return data;
            } catch (err) {
                console.error(err);
                throw err;
            } finally {
                setloading(false);
            }
            };

    
    // Loading screen - Handles Logout

    const handleLogout = async () => {
        
        setloading(true)
        const data = await logout()

        setuser(null) // logs out 
        setloading(false)

    }

//     useEffect(() => {
//     const getandsetuser = async () => {

//         try {
//             const data = await getme();
//             setuser(data.user);
//         } catch (err) {
//             console.error(err);
//             setuser(null);
//         } finally {
//             setloading(false);
//         }
//     };

//     getandsetuser();

// }, []);

  

    

    return { user , loading , handleRegister , handleLogin, handleLogout }

}


