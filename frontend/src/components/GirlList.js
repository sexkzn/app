import React, {Component} from 'react'
import {Link} from "react-router-dom";

class GirlList extends Component {
    constructor() {
        super();
        this.state = {
            pictures: [],
        }
    };

    componentDidMount() {
        fetch('https://dosugkzn.xyz/api/girls')
            .then(res => {
                return res.json();
            }).then(json => {
            let pictures = json.content.map(elem => {
                return (
                    <div style={{"text-align": "center"}}>
                        <div>
                            <Link to={'/girls/' + `${elem.id}`}>
                            <img src={elem.avatar} style={{display: "block", margin: "auto"}}/>
                            </Link>
                        </div>
                        <div >
                            <Link to={'/girls/' + `${elem.id}`}>
                                <text>{elem.name}</text>
                            </Link>
                        </div>
                        <p/>
                    </div>
                );
            });
            this.setState({pictures: pictures})
        });
    }

    render() {
        return (
            <div>
                {this.state.pictures}
            </div>
        );
    }

}

export default GirlList;