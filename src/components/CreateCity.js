import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { createCity } from '../graphql/mutations';
import gql from 'graphql-tag';

class AddCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      country: '',
    }
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleCityChange(event) {
    this.setState({
      city: event.target.value
    });
  }
  handleCountryChange(event) {
    this.setState({
      country: event.target.value
    });
  }
  handleSubmit(event) {
    // skip validations
    event.preventDefault();
    console.log(this.state);

    this.props.createCity(this.state);
  }
  render() {
    let { city, country } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          City:
          <input type="text" onChange={this.handleCityChange} value={city} />
        </label>
        <label>
          Country:
          <input type="text" onChange={this.handleCountryChange} value={country} />
        </label>
        <input type="submit" value="Create City" />
      </form>
    )
  }
}

const MutationAddCity = graphql(
  gql(createCity),
  {
    props: ({ ownProps, mutate }) => ({
      createCity: input => mutate({
        variables: {
          input: { 
            name: input.city,
            country: input.country,
          }
        }
      })
    })
  }
)(AddCity)

export default MutationAddCity;