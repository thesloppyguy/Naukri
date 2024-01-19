export interface IOrganisation {
    _id: string
    name: string
    contactEmail: string
    url: string
    status: 'allowed' | 'review' | 'denied'
    __v: number
}

export interface IUser {
    _id: string,
    email: string
    password: string
    role: 'User' | 'Admin' | 'Maintainer'
    organization: IOrganisation
    __v: number
}

export interface IResetPassword {
    id: string
    password: string
}

export interface IActivate {
    id: string
    password: string
}

export interface ILogin {
    orgId: string
    email: string,
    password: string,
}

export interface IRegister {
    organizationName: string;
    organizationEmail: string;
    url?: string;
}