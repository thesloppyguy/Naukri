interface Query {
  query: {
    match_all: any
  }
}

const createGeneralQuery = (params: any): Query => {
  return {
    query: {
      match_all: {}
    }
  }
}
const createNLPQuery = (params: any): Query => {
  return {
    query: {
      match_all: {}
    }
  }
}

export { createGeneralQuery, createNLPQuery }
