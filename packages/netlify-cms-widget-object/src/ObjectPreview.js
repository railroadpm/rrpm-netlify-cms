import React from 'react';
import PropTypes from 'prop-types';
import { WidgetPreviewContainer } from '@rrpm/netlify-cms-ui-default';

const ObjectPreview = ({ field }) => (
  <WidgetPreviewContainer>
    {(field && field.get('fields')) || field.get('field') || null}
  </WidgetPreviewContainer>
);

ObjectPreview.propTypes = {
  field: PropTypes.node,
};

export default ObjectPreview;
