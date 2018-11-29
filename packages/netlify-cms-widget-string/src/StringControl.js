import React from 'react';
import PropTypes from 'prop-types';

export default class StringControl extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: '',
  };

  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle,
    } = this.props;
    const disabled = (window && typeof window.ncDisableInputsByName != 'undefined' && forID.includes(window.ncDisableInputsByName));
    return (
      <input
        type="text"
        id={forID}
        className={classNameWrapper}
        value={value || ''}
        disabled={disabled}
        onChange={e => onChange(e.target.value)}
        onFocus={setActiveStyle}
        onBlur={setInactiveStyle}
      />
    );
  }
}
