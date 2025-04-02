
export interface User {
    firstname: string
    lastname: string
    username: string
    email: string
    password: string
}

export type LoginUser = Omit<User, 'email'>  //  Omitir id para crear registro