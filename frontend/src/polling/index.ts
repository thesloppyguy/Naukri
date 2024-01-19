import axios, { AxiosRequestConfig } from "axios";
// import { ConflictError, UnauthorizedError } from "../errors/HttpsErrors";
// import { IUser } from "../interfaces/Polling";
// import { IRegister, ILogin, IActivate, IResetPassword } from "../interfaces/Polling"

export async function pollServer(url: string, config?: AxiosRequestConfig<any>) {
    const response = await axios(process.env.BASE_URL + url, config);
    return response
}

// export async function getLoggedInUser(): Promise<IUser> {
//     const response = await fetchData("/api/users", { method: "GET" });
//     return response.json();
// }

// export async function signUp(details: IRegister): Promise<IUser> {
//     const response = await fetchData("/api/register",
//         {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(details),
//         });
//     return response.json();
// }

// export async function login(credentials: ILogin): Promise<any> {
//     axios.post("http://localhost:5000/api/login/", credentials, {
//         withCredentials: true,
//     })
//         .then((response) => {
//             return response
//         })
//         .catch((error) => {
//             return (error.response);
//         });
// }

// export async function activate(credentials: IActivate): Promise<IUser> {
//     const response = await fetchData("/api/invite",
//         {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(credentials),
//         });
//     return response.json();
// }

// export async function resetPassword(credentials: IResetPassword): Promise<IUser> {
//     const response = await fetchData("/api/reset",
//         {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(credentials),
//         });
//     return response.json();
// }

// export async function logout() {
//     axios
//         .post("http://localhost:5000/api/logout/", {
//             withCredentials: true,
//         })
// }

