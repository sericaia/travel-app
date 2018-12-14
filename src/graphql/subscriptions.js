// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateCity = `subscription OnCreateCity($id: ID, $name: String, $country: String) {
  onCreateCity(id: $id, name: $name, country: $country) {
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
export const onUpdateCity = `subscription OnUpdateCity($id: ID, $name: String, $country: String) {
  onUpdateCity(id: $id, name: $name, country: $country) {
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
export const onDeleteCity = `subscription OnDeleteCity($id: ID, $name: String, $country: String) {
  onDeleteCity(id: $id, name: $name, country: $country) {
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
export const onCreateLocation = `subscription OnCreateLocation(
  $id: ID
  $cityId: ID
  $name: String
  $info: String
) {
  onCreateLocation(id: $id, cityId: $cityId, name: $name, info: $info) {
    id
    cityId
    name
    info
  }
}
`;
export const onUpdateLocation = `subscription OnUpdateLocation(
  $id: ID
  $cityId: ID
  $name: String
  $info: String
) {
  onUpdateLocation(id: $id, cityId: $cityId, name: $name, info: $info) {
    id
    cityId
    name
    info
  }
}
`;
export const onDeleteLocation = `subscription OnDeleteLocation(
  $id: ID
  $cityId: ID
  $name: String
  $info: String
) {
  onDeleteLocation(id: $id, cityId: $cityId, name: $name, info: $info) {
    id
    cityId
    name
    info
  }
}
`;
