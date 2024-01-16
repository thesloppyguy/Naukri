import { SearchBody, NlpBody } from "../controllers/search"
import department from "../const/department"
import industry from "../const/industry"

const createGeneralQuery = (params: SearchBody) => {
  const must = []
  const should = []
  const mustNot = []
  if (params.must === "on") {
    for (let i = 0; i < params.keywords.length; i++) {
      must.push({ "match_phrase": { "review_body": params.keywords[i] } })
    }
  }
  else {
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
    must.push({ "match_phrase": { "location": params.location } })
  }
  if (params.gender !== "") {
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
    "size": 10,
    "from": (params.page - 1) * 10,
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
    }
  }
}

export { createGeneralQuery, createNLPQuery }
