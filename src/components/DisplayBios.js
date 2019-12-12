import React, { Component } from 'react';
//import Developer from './Developer';
import DeveloperBio from './DeveloperBio';
import { connect } from 'react-redux';
import devsActions from '../reducers/devBios';


class DisplayBios extends Component {
    render() {
        const {
            developers = []
        } = this.props
        return (
            developers.map((dev) => <DeveloperBio developer={dev} key={dev.id} />
            )
        );
    }
}

export default connect(({ developers }) => ({
    developers: developers
}), {
    fetchDevelopers: devsActions.getAllBiosActionCreator
})(DisplayBios);
