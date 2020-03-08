import React, { Component } from 'react';
import ProjectItems from '../../Project/ProjectItem/ProjectItem';
import CreateProjectButton from '../../Project/CreateProjectButton/CreateProjectButton';
import { connect } from 'react-redux'
import { getProjects } from '../../actions/projectAction';
import {PropTypes} from 'prop-types';

class Dashborad extends Component {
    constructor(){
        super();
        this.state = {
            projects: []
        }
    }
    componentDidMount(){
        this.props.getProjects()
    }
    render() {
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Projects</h1>
                            <br />
                            <CreateProjectButton />
                            <br />
                            <hr />
                            <ProjectItems />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

Dashborad.propTypes = {
    getProjects: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    project: state.project
})

export default connect(mapStateToProps, { getProjects })(Dashborad);