export interface ISearch {
    keywords: string[],
    must: boolean,
    notKeywords: string[],
    gender: string,
    location: string,
    expMax: string,
    expMin: string,
    department: string,
    industry: string,
    currentCompany: string,
    currentDesignation: string,
    ugCourse: string,
    pgCourse: string,
    pdCourse: string,
    jobcode: string,
}

export interface INLP {
    query: string
}