
export interface SearchBody {
    keywords: string[]
    must: boolean
    notKeywords: string[]
    gender: string
    location: string
    expMax: string
    expMin: string
    industry: string
    department: string
    currentCompany: string
    currentDesignation: string
    ugCourse: string,
    pgCourse: string,
    pdCourse: string,
    jobcode: string
    page: number
    global: boolean
}
export interface NlpBody {
    query: string
    page: number
}