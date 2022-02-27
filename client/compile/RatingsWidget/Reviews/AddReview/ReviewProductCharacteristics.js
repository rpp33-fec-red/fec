import React from 'react';
import ReviewCharacteristicValue from './ReviewCharacteristicValue.js';
import PropTypes from 'prop-types';

class ReviewProductCharacteristics extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      valueSelected: ''
    };
    this.showDescription = this.showDescription.bind(this);
  }

  showDescription (event) {
    const valueSelected = event.target.value;
    this.setState({
      valueSelected: valueSelected
    });
  }

  render () {
    const values = ['1', '2', '3', '4', '5'];
    return (
      <div>
        <label htmlFor={this.props.characteristic}>{this.props.characteristic}</label>
        {values.map((value) => {

          let descriptionShown;
          this.state.valueSelected === value ? descriptionShown = true : descriptionShown = false;

          return <ReviewCharacteristicValue
            key={value}
            value={value}
            characteristic={this.props.characteristic}
            showDescription={this.showDescription}
            descriptionShown={descriptionShown}/>;
        })}
      </div>
    );
  }
}

ReviewProductCharacteristics.propTypes = {
  characteristic: PropTypes.any
};

export default ReviewProductCharacteristics;