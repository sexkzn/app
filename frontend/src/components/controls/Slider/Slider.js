import React from 'react';
import PropTypes from 'prop-types';
import RcSlider from 'rc-slider';

const createSliderWithTooltip = RcSlider.createSliderWithTooltip;
const Range = createSliderWithTooltip(RcSlider.Range);

function Slider({ value, defaultValue, ...props }) {
  return (
    <Range
      {...props}
      className="slider__control slider-control"
      prefixCls="slider"
      value={Array.isArray(value) ? value : defaultValue}
      tipProps={{
        placement: 'bottom',
        className: 'test',
      }}
    />
  );
}

Slider.propTypes = {
  value: PropTypes.array,
};

Slider.defaultProps = {
  value: [],
};

export default Slider;
