import React from 'react';
import PropTypes from 'prop-types';
import { WidgetPreviewContainer } from '@rrpm/netlify-cms-ui-default';

const StringPreview = ({ value }) => <WidgetPreviewContainer>{value}</WidgetPreviewContainer>;

StringPreview.propTypes = {
  value: PropTypes.node,
};

export default StringPreview;
