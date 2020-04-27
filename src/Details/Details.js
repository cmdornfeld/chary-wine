import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Details extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_WINE_DETAILS', payload: this.props.match.params.id })
    }

    render() {
        return (
            <div>
                <Header />
                <Card>
                    <CardContent>
                        <img src={this.props.details.image} alt={this.props.details.brand} width="400" />
                        <br/>
                        <h2>{this.props.details.brand} {this.props.details.name}</h2>
                        <h2>{this.props.details.location}</h2>
                        <br/>
                        <Typography component="p">
                            {this.props.details.description}
                        </Typography>
                        <h3>Chad's Rating: {Number(this.props.details.c_rating).toFixed(2)}</h3>
                        <h3>Mary's Rating: {Number(this.props.details.m_rating).toFixed(2)}</h3>
                        <h3>${Number(this.props.details.price).toFixed(2)}</h3>
                    </CardContent>
                </Card>        
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState)=>({
    details: reduxState.detailsReducer
  });

export default connect(putReduxStateOnProps)(Details);