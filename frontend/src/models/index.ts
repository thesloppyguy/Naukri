export interface User {
    id: string
    email: string
    password: string
    role: string
    orgId: string
}

export interface Organization {
    id: string
    name: string
    email: string
    url: string
}

interface work {
    employee: string
}

interface education {
    intitute: string
}

export interface Candidate {
    name: string
    employee_id: string
    education: education[]
    work: work[]
}