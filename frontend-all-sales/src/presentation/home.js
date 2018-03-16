import React, { Component } from 'react';
import { setLoginStatus } from '../actions/userForm';
import { connect } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import NavBar from '../components/navbar';
import {
  Grid,
  PageHeader,
  Row
} from 'react-bootstrap'
import reduxlogo from '../images/reduxlogo.svg'
import reactlogo from '../images/reactlogo.svg'
import graphqllogo from '../images/graphqllogo.svg'
import '../App.css';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:5000/graphql' }),
  cache: new InMemoryCache()
});



const mapStateToProps = (store) => {
  return {
    APIURL: store.appState.APIURL
  }
}

class Home extends Component {

  componentWillMount() {
    this.props.dispatch(setLoginStatus(this.props.APIURL))
  }

  gQuery = () => {
    client.query({ query: gql` {
      allItems(first: 3) {
        nodes {
          id name
        }
      }
    }`
  })
  .then(res => window.alert(`You submitted:\n\n${JSON.stringify(res.data, null, 2)}`))
  }

    render() {
      return (
        <div>
          <NavBar />
          <Row>
            <Grid>
              <PageHeader>
                Authored by <span id="user-name">Daniel Hook</span>
              </PageHeader>
            </Grid>
          </Row>
          <img src={reduxlogo} className="redux-logo" alt="logo" />
          <img src={reactlogo} className="react-logo" alt="logo" />
          <img src={graphqllogo} className="graphql-logo" alt="logo" /> <br />
          <button
            className="graphql-query"
            style={{position: 'relative', left: 215, top: 20}}
            onClick={this.gQuery}>Query Items
          </button>
        </div>
      );
    }
  }

  export default connect(
    mapStateToProps
  )(Home)
