import React from 'react';
import ReviewCharacteristicRadioButton from './ReviewCharacteristicRadioButton.js';
import PropTypes from 'prop-types';

class ReviewCharacteristics extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      valueSelected: ''
    };
    this.showDescription = this.showDescription.bind(this);
  }

  showDescription (event) {
    const valueSelected = parseInt(event.target.value);
    this.setState({
      valueSelected: valueSelected
    });
  }

  render () {
    const values = [1, 2, 3, 4, 5];
    return (
      <div className="radio-buttons">
        <label htmlFor={this.props.characteristic}>{this.props.characteristic}</label>
        {values.map((value) => {

          let descriptionShown;
          this.state.valueSelected === value ? descriptionShown = true : descriptionShown = false;

          return <ReviewCharacteristicRadioButton
            key={value}
            value={value}
            characteristic={this.props.characteristic}
            showDescription={this.showDescription}
            descriptionShown={descriptionShown}
            id={this.props.id}/>;

        })}
      </div>
    );
  }
}

ReviewCharacteristics.propTypes = {
  characteristic: PropTypes.any,
  id: PropTypes.any
};

export default ReviewCharacteristics;