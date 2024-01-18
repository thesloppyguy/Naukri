export interface Organisation {
    _id: string
    name: string
    contactEmail: string
    url: string
    status: 'allowed' | 'review' | 'denied'
    __v: number
}

export interface User {
    _id: string,
    email: string
    password: string
    role: 'User' | 'Admin' | 'Maintainer'
    organization: Organisation
    __v: number
}

export interface ResetPasswordForm {
    id: string
    password: string
}

export interface ActivateForm {
    id: string
    password: string
}

export interface LoginForm {
    orgId: string
    email: string,
    password: string,
}

export interface RegisterForm {
    organizationName: string;
    organizationEmail: string;
    url?: string;
}