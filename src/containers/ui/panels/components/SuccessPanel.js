import React, {PureComponent} from 'react';
import Panel from '../../../../components/Panel';
import {translate} from 'react-i18next';

class SuccessPanel extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Panel xs={12} md={12} lg={6} color='success' title={t('ui_elements.panels.success_panel')}>
        <p>Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered
          had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure
          education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly.</p>
      </Panel>
    )
  }
}

export default translate('common')(SuccessPanel);
