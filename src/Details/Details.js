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
                <div className="wine-card-container">
                    <Card>
                        <CardContent>
                            <img src={this.props.details.image} alt={this.props.details.brand} width="400" /> 
                        </CardContent>
                    </Card>
                </div>          
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState)=>({
    details: reduxState.detailsReducer
  });

export default connect(putReduxStateOnProps)(Details);