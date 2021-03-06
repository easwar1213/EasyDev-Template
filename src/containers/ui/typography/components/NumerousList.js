import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {translate} from 'react-i18next';

class NumerousList extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Col md={12} lg={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>{t('ui_elements.typography.numerous_list')}</h5>
              <h5 className='subhead'>Use default <span className='red-text'>ol</span></h5>
            </div>
            <ol className='list'>
              <li><p>Nulla tellus elit, varius non commodo eget</p></li>
              <li><p>Cum sociis natoque penatibus</p></li>
              <li><p>Curabitur bibendum ornare dolor</p></li>
            </ol>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default translate('common')(NumerousList);
