import { SearchBody, NlpBody } from "../interfaces/search"
import department from "../const/department"
import industry from "../const/industry"
import createHttpError from "http-errors"
import clinet from '../os-client'

const getDescription = async (code: string) => {
  const response = await clinet.search({
    index: 'jobs',
    body: {
      "query": {
        "bool": {
          "must": [{ "match_phrase": { "job_id": code } }],
        }
      }
    }
  })
  if (response.body.hits.total.value > 0) {
    return response.body.hits.hits[0]._source.dec
  }
}

const createGeneralQuery = async (params: SearchBody) => {
  const must = []
  const should = []
  const mustNot = []
  if (params.must === true) {
    for (let i = 0; i < params.keywords.length; i++) {
      must.push({ "match_phrase": { "review_body": params.keywords[i] } })
    }
  }
  else if (params.must === false) {
    for (let i = 0; i < params.keywords.length; i++) {
      should.push({ "match_phrase": { "review_body": params.keywords[i] } })
    }
  }
  for (let i = 0; i < params.notKeywords.length; i++) {
    mustNot.push({ "match_phrase": { "review_body": params.notKeywords[i] } })
  }
  if (params.department in department) {
    for (let i = 0; i < department[params.department].length; i++) {
      should.push({ "match_phrase": { "review_body": department[params.department][i] } })
    }
  }
  if (params.industry in industry) {
    for (let i = 0; i < industry[params.industry].length; i++) {
      should.push({ "match_phrase": { "review_body": industry[params.industry][i] } })
    }
  }
  if (params.location !== "") {
    must.push({ "match_phrase": { "current_address": params.location } })
  }
  // if (params.currentCompany !== "") {
  //   must.push({
  //     "nested": {
  //       "path": "work_experience", "query": {
  //         "more_like_this": {
  //           "fields": ["work_experience.employee"],
  //           "like": params.currentCompany, "min_term_freq": 1,
  //           "min_doc_freq": 1
  //         }
  //       }
  //     }
  //   })
  // }
  // if (params.currentDesignation !== "") {
  //   must.push({
  //     "more_like_this": {
  //       "fields": ["review_body"],
  //       "like": params.currentDesignation, "min_term_freq": 1,
  //       "min_doc_freq": 1
  //     }
  //   })
  // }
  // if (params.ugCourse !== "any") {
  //   must.push({
  //     "nested": {
  //       "path": "education", "query": {
  //         "more_like_this": {
  //           "fields": ["education.degree_name"],
  //           "like": params.ugCourse, "min_term_freq": 1,
  //           "min_doc_freq": 1
  //         }
  //       }
  //     }
  //   })
  // }
  // if (params.pgCourse !== "any") {
  //   must.push({
  //     "nested": {
  //       "path": "education", "query": {
  //         "more_like_this": {
  //           "fields": ["education.degree_name"],
  //           "like": params.pgCourse, "min_term_freq": 1,
  //           "min_doc_freq": 1
  //         }
  //       }
  //     }
  //   })
  // }
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
    must.push({ "match_phrase": { "gender": params.gender } })
  }
  must.push({
    "range": {
      "total_work_experience": {
        "gte": params.expMin,
        "lte": params.expMax
      }
    }
  })
  if (params.jobcode === "") {
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
      "size": 16,
      "from": (params.page - 1) * 16,
    }
  }
  const description = await getDescription(params.jobcode)
  if (description === "") {
    throw createHttpError(400, 'Jobcode not found')
  }
  if (params.global !== true) {
    must.push({ "match_phrase": { "job_id": params.jobcode } })
  }
  return {
    "_source": {
      "excludes": [
        "passage_embedding"]
    },
    "query": {
      "neural": {
        "passage_embedding": {
          "query_text": description,
          "model_id": "xBArqIwBnT_YCGy5xijZ",
          "k": 50,
          "filter": {
            "bool": {
              "must": [{ "match_phrase": { "job_id": "LNT/AS/801615" } }],
              "should": [],
              "must_not": []
            }
          }
        }
      }
    }
  }

}
const createNLPQuery = (params: NlpBody) => {
  console.log(params);
  return {
    "_source": {
      "exclude": ["passage_embedding"]
    },
    "query": {
      "match_all": {}
    },
    "size": 16,
    "from": (params.page - 1) * 16,
  }
}

export { createGeneralQuery, createNLPQuery }
