export interface RegisterBody {
    organizationName: string;
    organizationEmail: string;
    url?: string;
}

export interface LoginBody {
    orgId: string
    email: string,
    password: string,
}

export interface ActivateBody {
    id: string
    password: string
}

export interface ResetPasswordBody {
    id: string
    password: string
}