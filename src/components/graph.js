import React from "react"
import { connect } from "react-redux"

import draw from "./lib/draw"

class Graph extends React.Component {
    componentDidMount(){
        draw(this.props.data, this.refs.canvas)
    }
    render() {
        return(
            <div className="container">
                <h1>Force directed Graph</h1>
                <svg></svg>
                <div className="flag-container"></div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Graph)
