
export interface User {
    username: string
    email: string
    password: string
}

export type LoginUser = Omit<User, 'email'>  //  Omitir id para crear registro