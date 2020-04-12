import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Home extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'GET_WINES'});
      }

    render() {
        return (
            <div>
                {this.props.wines.map(wine => {
                    return (
                        <Card key={wine.id}>
                            <CardContent>
                            <Typography>
                                <h2>{wine.brand}</h2>
                            </Typography>
                            <br/>
                            {/* // on the click of the "movie.poster"/img, "link" user to the details page
                                // trigger goToDetails function with given parameters (event and the id of the movie clicked) */}
                            {/* <Link to='/details'> */}
                            <img onClick={(event) => this.goToDetails(event, wine.id)} src={wine.image}
                                alt={wine.brand} /> 
                            {/* </Link> */}
                            <Typography component="p">
                                {wine.description}
                            </Typography>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState)=>({
    wines: reduxState.winesReducer
  });

export default connect(putReduxStateOnProps)(Home);