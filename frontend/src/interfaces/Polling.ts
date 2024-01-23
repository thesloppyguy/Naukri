export interface IOrganisation {
    id: string
    name: string
    contactEmail: string
    url: string
    status: 'Approved' | 'Review' | 'Denied'
}

export interface IUser {
    id: string
    name: string
    email: string
    role: 'User' | 'Admin' | 'Maintainer'
    organization: IOrganisation
}

export interface IResetPassword {
    password: string
    repassword: string
}

export interface IActivate {
    password: string
    repassword: string
}

export interface ILogin {
    organization: string
    email: string,
    password: string,
}

export interface IRegister {
    organizationName: string;
    organizationEmail: string;
    url?: string;
}

export interface IUserState {
    type: UserAction;
    payload: IUser;
}

export interface IForgotPassword {
    organization: string;
    email: string;
}


export enum UserAction {
    SET_USER_DATA,
}
