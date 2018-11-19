import React from 'react';
import PropTypes from 'prop-types';
import { WidgetPreviewContainer } from '@rrpm/netlify-cms-ui-default';

const NumberPreview = ({ value }) => <WidgetPreviewContainer>{value}</WidgetPreviewContainer>;

NumberPreview.propTypes = {
  value: PropTypes.node,
};

export default NumberPreview;
