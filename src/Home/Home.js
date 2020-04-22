import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
// import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Home extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'GET_WINES'});
      }

      viewWine = (id) => {
        this.props.history.push(`/wines/details/${id}`);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="wine-card-container">
                    {this.props.wines.map(wine => {
                        return (
                            <Card className="wine-card" key={wine.id}
                                onClick={() => this.viewWine(wine.id)}>
                                <CardContent>
                                {/* // on the click of the "movie.poster"/img, "link" user to the details page
                                    // trigger goToDetails function with given parameters (event and the id of the movie clicked) */}
                                {/* <Link to='/details'> */}
                                <img src={wine.image} alt={wine.brand} width="200" /> 
                                {/* </Link> */}
                                <br/>
                                <h2>{wine.brand} {wine.name}</h2>
                                <br/>
                                <Typography component="p">
                                    {wine.description}
                                </Typography>
                                <h3>Rating: {Number(wine.totalRating).toFixed(2)}</h3>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState)=>({
    wines: reduxState.winesReducer
  });

export default connect(putReduxStateOnProps)(Home);