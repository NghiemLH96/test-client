import axios from "axios";
import { UserCreate } from "src/interfaces/user.interface";

export const usersApiModule = {
    createNew:async function(newUser:UserCreate){
        await axios.post(import.meta.env.VITE_API_SERVER + "/users",newUser)
    },
    getAll:async function(){
        await axios.get(import.meta.env.HOST_API + "/users")
    },
    getById:async function(id:string){
        await axios.get(import.meta.env.HOST_API + "/users/" + id)
    },
    getByStatus:async function(status:string){
        await axios.get(import.meta.env.HOST_API + "/users/status/" + status)
    },
    changePasswords:async function(id:string,newPassword:string){
        await axios.patch(import.meta.env.HOST_API + "/users/" + id + "/change-passwords/" , {id , newPassword})
    },
    login:async function(loginDetail:{username:string, passwords:string}){
        await axios.post(import.meta.env.HOST_API + "/users/login" , loginDetail)
    }
}