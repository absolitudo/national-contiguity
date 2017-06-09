import React from "react"
import { connect } from "react-redux"

import * as d3 from "d3"


class Graph extends React.Component {
    componentDidMount(){

    }
    render() {
        return(
            <div className="container">
                <svg></svg>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Graph)
