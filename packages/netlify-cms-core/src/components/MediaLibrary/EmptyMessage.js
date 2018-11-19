import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { colors } from '@rrpm/netlify-cms-ui-default';

const EmptyMessageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.isPrivate && colors.textFieldBorder};
`;

const EmptyMessage = ({ content, isPrivate }) => (
  <EmptyMessageContainer isPrivate={isPrivate}>
    <h1>{content}</h1>
  </EmptyMessageContainer>
);

EmptyMessage.propTypes = {
  content: PropTypes.string.isRequired,
  isPrivate: PropTypes.bool,
};

export default EmptyMessage;
