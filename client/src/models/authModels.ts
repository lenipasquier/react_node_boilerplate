export interface IAuthData {
    email:string,
    password:string
}

export interface IRegisterData {
    email:string,
    password:string
}

export interface IAuthUser {
    id:number,
    email:string,
    isAdmin:boolean,
    roles:string,
    accessToken:string,
    apiKey:string|null
}