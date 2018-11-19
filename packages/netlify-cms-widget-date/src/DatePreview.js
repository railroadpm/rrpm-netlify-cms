import React from 'react';
import PropTypes from 'prop-types';
import { WidgetPreviewContainer } from '@rrpm/netlify-cms-ui-default';

const DatePreview = ({ value }) => (
  <WidgetPreviewContainer>{value ? value.toString() : null}</WidgetPreviewContainer>
);

DatePreview.propTypes = {
  value: PropTypes.object,
};

export default DatePreview;
