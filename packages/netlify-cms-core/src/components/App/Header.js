import PropTypes from 'prop-types';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled, { css } from 'react-emotion';
import { translate } from 'react-polyglot';
import { NavLink } from 'react-router-dom';
import {
  Icon,
  Dropdown,
  DropdownItem,
  StyledDropdownButton,
  colors,
  lengths,
  shadows,
  buttons,
} from '@rrpm/netlify-cms-ui-default';
import SettingsDropdown from 'UI/SettingsDropdown';

const styles = {
  buttonActive: css`
    color: ${colors.active};
  `,
};

const AppHeaderContainer = styled.header`
  z-index: 300;
`;

const AppHeader = styled.div`
  ${shadows.dropMain};
  position: fixed;
  width: 100%;
  top: 0;
  background-color: ${colors.foreground};
  z-index: 300;
  height: ${lengths.topBarHeight};
`;

const AppHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 800px;
  max-width: 1440px;
  padding: 0 12px;
  margin: 0 auto;
`;

const AppHeaderButton = styled.button`
  ${buttons.button};
  background: none;
  color: #7b8290;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  display: inline-flex;
  padding: 16px 20px;
  align-items: center;

  ${Icon} {
    margin-right: 4px;
    color: #b3b9c4;
  }

  &:hover,
  &:active,
  &:focus {
    ${styles.buttonActive};

    ${Icon} {
      ${styles.buttonActive};
    }
  }

  ${props => css`
    &.${props.activeClassName} {
      ${styles.buttonActive};

      ${Icon} {
        ${styles.buttonActive};
      }
    }
  `};
`;

const AppHeaderNavLink = AppHeaderButton.withComponent(NavLink);

const AppHeaderActions = styled.div`
  display: inline-flex;
  align-items: center;
`;

const AppHeaderQuickNewButton = styled(StyledDropdownButton)`
  ${buttons.button};
  ${buttons.medium};
  ${buttons.gray};
  margin-right: 8px;

  &:after {
    top: 11px;
  }
`;

class Header extends React.Component {
  static propTypes = {
    user: ImmutablePropTypes.map.isRequired,
    collections: ImmutablePropTypes.orderedMap.isRequired,
    onCreateEntryClick: PropTypes.func.isRequired,
    onLogoutClick: PropTypes.func.isRequired,
    openMediaLibrary: PropTypes.func.isRequired,
    hasWorkflow: PropTypes.bool.isRequired,
    displayUrl: PropTypes.string,
    t: PropTypes.func.isRequired,
  };

  handleCreatePostClick = collectionName => {
    const { onCreateEntryClick } = this.props;
    if (onCreateEntryClick) {
      onCreateEntryClick(collectionName);
    }
  };

  render() {
    const {
      user,
      collections,
      onLogoutClick,
      openMediaLibrary,
      hasWorkflow,
      displayUrl,
      t,
      showMediaButton,
    } = this.props;

    const createableCollections = collections
      .filter(collection => collection.get('create'))
      .toList();

    return (
      <AppHeaderContainer>
        <AppHeader className="nc-app-header">
          <AppHeaderContent className="nc-app-header-content">
            <nav>
              <AppHeaderNavLink
                to="/"
                className = "nc-app-header-btn nc-app-header-btn-content"
                activeClassName="header-link-active"
                isActive={(match, location) => location.pathname.startsWith('/collections/')}
              >
                <Icon type="page" />
                {t('app.header.content')}
              </AppHeaderNavLink>
              {hasWorkflow ? (
                <AppHeaderNavLink to="/workflow" activeClassName="header-link-active" className="nc-app-header-btn nc-app-header-btn-wf nc-app-ui-rbac">
                  <Icon type="workflow" />
                  {t('app.header.workflow')}
                </AppHeaderNavLink>
              ) : null}
              {showMediaButton ? (
                <AppHeaderButton onClick={openMediaLibrary} className="nc-app-header-btn nc-app-header-btn-media">
                  <Icon type="media-alt" />
                  {t('app.header.media')}
                </AppHeaderButton>
              ) : null}
            </nav>
            <AppHeaderActions className="nc-app-header-actions">
              {createableCollections.size > 0 && (
                <Dropdown
                  renderButton={() => (
                    <AppHeaderQuickNewButton> {t('app.header.quickAdd')}</AppHeaderQuickNewButton>
                  )}
                  dropdownTopOverlap="30px"
                  dropdownWidth="160px"
                  dropdownPosition="left"
                  className="nc-app-header-quick-add nc-app-ui-rbac"
                >
                  {createableCollections.map(collection => (
                    <DropdownItem
                      key={collection.get('name')}
                      label={collection.get('label_singular') || collection.get('label')}
                      onClick={() => this.handleCreatePostClick(collection.get('name'))}
                      className={`nc-app-header-quick-add-link nc-app-header-quick-add-link-${collection.get('name')} nc-app-ui-rbac`}
                    />
                  ))}
                </Dropdown>
              )}
              <SettingsDropdown
                className = "nc-app-header-actions-dropdown"
                displayUrl={displayUrl}
                imageUrl={user.get('avatar_url')}
                onLogoutClick={onLogoutClick}
              />
            </AppHeaderActions>
          </AppHeaderContent>
        </AppHeader>
      </AppHeaderContainer>
    );
  }
}

export default translate()(Header);
