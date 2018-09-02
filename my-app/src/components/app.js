// Import react and component
import React, { Component } from 'react'

// 1. common function
function One() {
    return(
        <div>
            <h3>1.Common Function</h3>
        </div>
    );
}

// 2. Anonymous function
var Two = function() {
    return(
        <div>
            <h3>2.Anonymous Function</h3>
        </div>
    );
}

// 3. Arrow function
var Three = () => (
    <div>
        <h3>3.Arrow Function</h3>
    </div>
);
var cuocsong = () => (
    <div>
        <h1>Bố lương cao, thương mẹ thương Tom</h1>
        <h2>Mẹ lương cao, thương bố thương Tom</h2>
        <h3>Tom mạnh khoẻ, ngoan ngoãn</h3>
    </div>
)
//1.Props function
var Course = (props) => (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-info">
            <div className="panel-heading">
                <h3 className="panel-title">{props.title}</h3>
            </div>
            <div className="panel-body">
                <ul className="list-group">
                    <li class="list-group-item">{props.noidung}</li>
                </ul>
                <a href="#abc"><img src={props.images} width="100%" alt="abc"/></a>
            </div>
        </div>
    </div>
);

// JSX
const duc = 'Duclv';

class Duc extends Component {
    render () {
        return (
            <div>
                <h1>Day lay: {duc}</h1>
            </div>
        )
    }
}

class App extends Component {
    render () {
        return (
            <div>
                <One />
                <Two />
                <Three />
                <Course title="React" images="https://image.24h.com.vn/upload/2-2018/images/2018-06-09/bale-fue-gran-protagonista-final-kiev-1528373667825-660-1528533664-309-width660height371.jpg" noidung="Reactjs Free"/>
                <Course title="Angular" images="https://image.24h.com.vn/upload/2-2018/images/2018-06-10/messi01-660-1528618715-112-width660height437.jpg" noidung="Angular Free"/>
                <Duc />
            </div>
        )
    }
}

export default App;