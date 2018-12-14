// eslint-disable
// this is an auto generated file. This will be overwritten

export const createCity = `mutation CreateCity($input: CreateCityInput!) {
  createCity(input: $input) {
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
export const updateCity = `mutation UpdateCity($input: UpdateCityInput!) {
  updateCity(input: $input) {
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
export const deleteCity = `mutation DeleteCity($input: DeleteCityInput!) {
  deleteCity(input: $input) {
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
export const createLocation = `mutation CreateLocation($input: CreateLocationInput!) {
  createLocation(input: $input) {
    id
    cityId
    name
    info
  }
}
`;
export const updateLocation = `mutation UpdateLocation($input: UpdateLocationInput!) {
  updateLocation(input: $input) {
    id
    cityId
    name
    info
  }
}
`;
export const deleteLocation = `mutation DeleteLocation($input: DeleteLocationInput!) {
  deleteLocation(input: $input) {
    id
    cityId
    name
    info
  }
}
`;
