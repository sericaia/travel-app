// eslint-disable
// this is an auto generated file. This will be overwritten

export const fetchCity = `query FetchCity($id: ID!) {
  fetchCity(id: $id) {
    id
    name
    country
    locations {
      id
      cityId
      name
      info
    }
  }
}
`;
export const getCity = `query GetCity($id: ID!) {
  getCity(id: $id) {
    id
    name
    country
    locations {
      id
      cityId
      name
      info
    }
  }
}
`;
export const listCities = `query ListCities(
  $filter: TableCityFilterInput
  $limit: Int
  $nextToken: String
) {
  listCities(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      country
      locations {
        id
        cityId
        name
        info
      }
    }
    nextToken
  }
}
`;
export const getLocation = `query GetLocation($id: ID!) {
  getLocation(id: $id) {
    id
    cityId
    name
    info
  }
}
`;
export const listLocations = `query ListLocations(
  $cityId: ID!
  $filter: TableLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocations(
    cityId: $cityId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      cityId
      name
      info
    }
    nextToken
  }
}
`;
