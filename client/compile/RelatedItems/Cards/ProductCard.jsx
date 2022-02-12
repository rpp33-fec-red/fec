import React from 'react';

class ProductCard extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            id: props.product_id,
            photo: `https://i.pinimg.com/originals/2d/38/62/2d3862abf214ecdb6a1c231e035c1796.jpg`,
            category: 'Pug',
            product_name: '',
            default_price: '$$$', 
        }
        this.getCardInfo = this.getCardInfo.bind(this);
    }
    
    componentDidMount () {
        this.getCardInfo(this.props.product_id);
    }

    getCardInfo (id) {
        this.props.getData(`products/${id}`, {}, (data) => {
            this.setState ({
                category: data.results.category,
                product_name: data.results.name,
                default_price: data.results.default_price
            });
        });
    
        this.props.getData(`products/${id}/styles`, {}, (data) => {
            this.setState({
                photo: data.results.results[0]['photos'][0]['thumbnail_url']
            })
        });
    }

    render () {
        return (
            <div className="productCard" style={{
                boxShadow : `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
                img: { display: 'block' },
                width: '15rem',
                height: '26rem',
                marginRight: '2rem'
            }}>
                <img src={this.state.photo} style={{ width: '13rem', height:'16rem', padding: '1rem'}}/>
                <p className="category" style={{paddingLeft: '1rem'}}>{this.state.category}</p>
                <h4 className="name" style={{paddingLeft: '1rem'}}><b>{this.state.product_name}</b></h4>
                <p className="default-price" style={{paddingLeft: '1rem'}}>$ {this.state.default_price}</p>
           
            </div>
        )
    }
}

export default ProductCard;