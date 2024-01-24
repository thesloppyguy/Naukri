"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNLPQuery = exports.createGeneralQuery = void 0;
const department_1 = __importDefault(require("../const/department"));
const industry_1 = __importDefault(require("../const/industry"));
const ug_1 = __importDefault(require("../const/ug"));
const OpenSearch_1 = __importDefault(require("../clients/OpenSearch"));
const stopwords_1 = __importDefault(require("../const/stopwords"));
const graphql_1 = require("graphql");
const getDescription = async (code) => {
    const response = await OpenSearch_1.default.search({
        index: 'jobs',
        body: {
            "query": {
                "bool": {
                    "must": [{ "match_phrase": { "job_id": code } }],
                }
            }
        }
    });
    if (response.body.hits.total.value > 0) {
        return response.body.hits.hits[0]._source.description;
    }
};
const cleanText = (text) => {
    if (text == undefined)
        return [];
    const cleanTest = text.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
    const uniqueWords = new Set(cleanTest.split(' '));
    const finalWordList = Array.from(uniqueWords).filter((word) => word.length > 1);
    const removedWordList = Array.from(finalWordList).filter((word) => !stopwords_1.default.includes(word));
    return removedWordList;
};
const createGeneralQuery = async (params, page) => {
    const must = [];
    const should = [];
    const mustNot = [];
    if (params.must === true) {
        for (let i = 0; i < params.keywords.length; i++) {
            must.push({ "match_phrase": { "review_body": params.keywords[i] } });
        }
    }
    else if (params.must === false) {
        for (let i = 0; i < params.keywords.length; i++) {
            should.push({ "match_phrase": { "review_body": params.keywords[i] } });
        }
    }
    for (let i = 0; i < params.notKeywords.length; i++) {
        mustNot.push({ "match_phrase": { "review_body": params.notKeywords[i] } });
    }
    if (params.department in department_1.default) {
        for (let i = 0; i < department_1.default[params.department].length; i++) {
            should.push({ "match_phrase": { "review_body": department_1.default[params.department][i] } });
        }
    }
    if (params.industry in industry_1.default) {
        for (let i = 0; i < industry_1.default[params.industry].length; i++) {
            should.push({ "match_phrase": { "review_body": industry_1.default[params.industry][i] } });
        }
    }
    if (params.location !== "") {
        must.push({ "match_phrase": { "current_address": params.location } });
    }
    if (params.currentCompany !== "") {
        must.push({
            "nested": {
                "path": "work_experience", "query": {
                    "more_like_this": {
                        "fields": ["work_experience.employee"],
                        "like": params.currentCompany, "min_term_freq": 1,
                        "min_doc_freq": 1
                    }
                }
            }
        });
    }
    if (params.currentDesignation !== "") {
        must.push({
            "more_like_this": {
                "fields": ["review_body"],
                "like": params.currentDesignation, "min_term_freq": 1,
                "min_doc_freq": 1
            }
        });
    }
    if (params.ugCourse !== "any") {
        if (params.ugCourse !== "no") {
            console.log(params.ugCourse);
            must.push({
                "nested": {
                    "path": "education",
                    "query": {
                        "terms": { "education.degree_name": ug_1.default[params.ugCourse] }
                    }
                }
            });
        }
    }
    if (params.pgCourse !== "any") {
        if (params.ugCourse !== "no") {
            must.push({
                "nested": {
                    "path": "education", "query": {
                        "more_like_this": {
                            "fields": ["education.degree_name"],
                            "like": params.pgCourse, "min_term_freq": 1,
                            "min_doc_freq": 1
                        }
                    }
                }
            });
        }
    }
    // if (params.pdCourse !== "any") {
    //   must.push({
    //     "nested": {
    //       "path": "education", "query": {
    //         "more_like_this": {
    //           "fields": ["education.degree_name"],
    //           "like": params.pdCourse, "min_term_freq": 1,
    //           "min_doc_freq": 1
    //         }
    //       }
    //     }
    //   })
    // }
    if (params.gender !== "any") {
        must.push({ "match_phrase": { "gender": params.gender } });
    }
    must.push({
        "range": {
            "total_work_experience": {
                "gte": params.expMin,
                "lte": params.expMax
            }
        }
    });
    if (params.jobcode !== "") {
        const description = await getDescription(params.jobcode);
        if (description === "") {
            throw new graphql_1.GraphQLError('Jobcode not found', { extensions: { code: 'CUSTOM_CODE_400' } });
        }
        else {
            const words = cleanText(description);
            for (let i = 0; i < words.length; i++) {
                should.push({ "match_phrase": { "review_body": words[i] } });
            }
            if (params.global !== true) {
                must.push({ "match_phrase": { "job_id": params.jobcode } });
            }
        }
    }
    return {
        "_source": {
            "exclude": ["passage_embedding"]
        },
        "query": {
            "bool": {
                "must": must,
                "should": should,
                "must_not": mustNot
            }
        },
        "size": 8,
        "from": (page - 1) * 8
    };
};
exports.createGeneralQuery = createGeneralQuery;
const createNLPQuery = (params) => {
    console.log(params);
    return {
        "_source": {
            "exclude": ["passage_embedding"]
        },
        "query": {
            "match_all": {}
        },
        "size": 160,
    };
};
exports.createNLPQuery = createNLPQuery;
