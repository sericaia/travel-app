import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { listCities } from '../graphql/queries';
import gql from "graphql-tag";

class ShowCities extends Component {
  render() {
    const { cities } = this.props;
    if (!cities.length) {
      return null;
    }
    return cities.map(city => <p key={city.id}>{city.name}, {city.country}</p>)
  }
}

const ShowCitiesWithData = graphql(
  gql(listCities),
  {
    options: {
      fetchPolicy: 'cache-and-network',
    },
    props: props => ({
      cities: props.data.listCities ? props.data.listCities.items : { items: [] },
   }),
  }
)(ShowCities);

export default ShowCitiesWithData;