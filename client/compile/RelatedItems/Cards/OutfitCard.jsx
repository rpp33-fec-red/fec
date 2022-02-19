import React from 'react';
import '../relatedItems.scss';

class OutfitCard extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            id: props.outfit_id,
            photo: `https://i.pinimg.com/originals/2d/38/62/2d3862abf214ecdb6a1c231e035c1796.jpg`,
            category: 'Pug',
            product_name: '',
            default_price: '$$$',
        }
        this.getOutfitInfo = this.getOutfitInfo.bind(this);
    }
    componentDidMount () {
        this.getOutfitInfo(this.props.outfit_id);
    }

    getOutfitInfo (id) {

        this.props.getData(['products',id], (data) => {
            this.setState ({
                category: data.results.category,
                product_name: data.results.name,
                default_price: data.results.default_price
            });
        });

        this.props.getData(['products',id,'styles'],(data) => {
            this.setState({
                photo: data.results.results[0]['photos'][0]['thumbnail_url']
            })
        });
    }

    render () {
        return (
            <div className="productCard" >
                <button
                    id="deleteButton"
                    value={this.state.id}
                    onClick={this.props.handleDelete}
                    >X</button>
                <img src={this.state.photo} />
                <p className="category" ></p>
                <a
                    className={`cardtitle ${this.props.product_id}`}
                    onClick={this.props.handleClick}
                    href={`/products/${this.props.product_id}`}
                ><b>{this.state.product_name}</b></a>
                <p className="default-price" >$ {this.state.default_price}</p>

            </div>
        );
    }
}

export default OutfitCard;
