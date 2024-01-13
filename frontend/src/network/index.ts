import { ConflictError, UnauthorizedError } from "../errors/HttpsErrors";
import { Organization, Candidate, User } from "../models";

async function fetchData(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init);
    if (response.ok) {
        return response;
    } else {
        const errorBody = await response.json();
        const errorMessage = errorBody.error;
        if (response.status === 401) {
            throw new UnauthorizedError(errorMessage);
        } else if (response.status === 409) {
            throw new ConflictError(errorMessage);
        } else {
            throw Error("Request failed with status: " + response.status + " message: " + errorMessage);
        }
    }
}

export async function getLoggedInUser(): Promise<User> {
    const response = await fetchData("/api/users", { method: "GET" });
    return response.json();
}

export interface RegisterBody {
    organizationName: string;
    organizationEmail: string;
    url?: string;
  }

export async function signUp(details: RegisterBody): Promise<User> {
    const response = await fetchData("/api/register",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(details),
        });
    return response.json();
}

export interface LoginBody {
    orgId: string
    username: string,
    password: string,
}

export async function login(credentials: LoginBody): Promise<User> {
    const response = await fetchData("/api/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
    return response.json();
}

export interface ActivateBody {
    id: string
    username: string
    password: string
}

export async function activate(credentials: ActivateBody): Promise<User> {
    const response = await fetchData("/api/invite",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
    return response.json();
}

export interface ResetPasswordBody {
    id: string
    password: string
}

export async function resetPassword(credentials: ResetPasswordBody): Promise<User> {
    const response = await fetchData("/api/reset",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
    return response.json();
}

export async function logout() {
    await fetchData("/api/logout", { method: "POST" });
}

export async function fetchNotes(): Promise<Candidate[]> {
    const response = await fetchData("/api/notes", { method: "GET" });
    return response.json();
}