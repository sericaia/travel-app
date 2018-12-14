import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { listCities } from '../graphql/queries';
import gql from "graphql-tag";

class ShowCities extends Component {
  render() {
    const { cities } = this.props;
    return cities.map(city => <p key={city.id}>{city.name}, {city.country}</p>)
  }
}

const ShowCitiesWithData = graphql(
  gql(listCities),
  {
    options: {
      fetchPolicy: 'cache-first',
    },
    props: ({ data: { listCities = { items: [] } } }) => ({
      cities: listCities.items
    })
  }
)(ShowCities);

export default ShowCitiesWithData;