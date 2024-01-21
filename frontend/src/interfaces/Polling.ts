export interface IOrganisation {
    id: string
    name: string
    contactEmail: string
    url: string
    status: 'allowed' | 'review' | 'denied'
}

export interface IUser {
    id: string
    name: string
    email: string
    password: string
    role: 'User' | 'Admin' | 'Maintainer'
    organization: IOrganisation
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