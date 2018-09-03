import React, { Component } from 'react'

class Content extends Component {
    constructor(props) {
        super(props);
    }

    // Create function announce
    announce() {
        alert("Edit content");
    }
    announce2() {
        alert("Remove content");
    }
    
    render () {
        return (
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className= {"col-lg-6 " + this.props.order2}>
                            <div className="p-5">
                                <img className="img-fluid rounded-circle" src={this.props.images} alt="" />
                            </div>
                        </div>
                        <div className= {"col-lg-6 " + this.props.order1}>
                            <div className="p-5">
                                <h2 className="display-4">{this.props.title}</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div class="btn btn-group">
                            <div class="btn btn-info" onClick={this.announce}>Edit</div>
                            <div class="btn btn-warning" onClick={this.announce2}>Remove</div>
                        </div>
                        
                    </div>
                </div>
            </section>
        )
    }
}

export default Content;