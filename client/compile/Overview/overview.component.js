import React from 'react';

import LeftContainer from './leftContainer/leftcontainer.component.js'
import RightContainer from './rightContainer/rightcontainer.component.js'
import './overview.scss';


class Overview extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                onProduct: {},
                onStyle: {}
            }
            this.getData = this.getData.bind(this);
        }

        componentDidMount() {
            this.getData();
        }

        getData() {
            var that = this;
            this.props.getProducts(['products', 64620, 'styles'], function(data) {
                that.setState({ onProduct: data.results });
                if ( data.results){
                    console.log(data.results)
                    that.setState({ onStyle: data.results.results[0] });

                }
            })
        }


        render() {
            return (
            < div className = "overview" >
                <LeftContainer onStyle = { this.state.onStyle }/>
                <RightContainer/>
            </div>)
            }



        }
        export default Overview;