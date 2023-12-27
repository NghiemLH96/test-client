enum userRole {
    admin,
    member
}

interface ipList {
    id:number,
    ip:string,
    userId:number,
    user:User
}

export interface User {
    id:number,
    userName:string,
    password:string,
    avatar:string,
    email:string,
    role:userRole,
    status:boolean,
    createdAt:string,
    updatedAt:string,
    ipList:ipList[]
}

export interface UserCreate {
    userName:string,
    password:string,
    avatar:string,
    email:string,
}