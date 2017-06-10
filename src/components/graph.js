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
                <svg></svg>
                <canvas width="600" height="600" ref="canvas"></canvas>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Graph)
