import React, {Component} from 'react'
import {Link, useParams} from "react-router-dom";

class GirlItem extends Component {
    constructor() {
        super();
        this.state = {
            pictures: [],
        }
    };

    componentDidMount() {
        const { match: { params } } = this.props;
        fetch('https://dosugkzn.xyz/api/girls/' + params.id)
            .then(res => {
                return res.json();
            }).then(json => {
            let images = json.photos.map(elem => {
                return <div><img key={elem} src={elem} style={{display: "block", margin: "auto"}}/></div>
            });
            this.setState({images: images})
        });
    }

    render() {
        return (
            <div>
                {this.state.images}
            </div>
        );
    }

}

export default GirlItem;