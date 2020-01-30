import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const compName = 'close-btn';

const propTypes = {
  size: PropTypes.oneOf(['sm', 'lg']),
  variant: PropTypes.oneOf(['light', 'dark']),
  pos: PropTypes.oneOf(['rel', 'abs', 'fxd']),
  posAlign: PropTypes.oneOf(['left', 'right'])
};

const defaultProps = {
  variant: 'dark',
  pos: 'rel',
  posAlign: 'left'
};

const Close = ({ variant, pos, posAlign, size, onClick }) => {
  const initialClasses = classNames(
    compName,
    pos !== 'rel' ? `${compName}--${pos} ${compName}--${posAlign}` : '',
    size ? `${compName}--${variant}` : ''
  );

  const ref = useRef();

  return (
    <button
      type='button'
      className={initialClasses}
      ref={ref}
      onClick={onClick}
    />
  );
};

Close.propTypes = propTypes;
Close.defaultProps = defaultProps;

export default Close;
