import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {translate} from 'react-i18next';

class SimpleIconsList extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Col md={12} lg={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>{t('ui_elements.typography.simple_icon_list')}</h5>
              <h5 className='subhead'>Use default ul with class <span className='red-text'>icons-list</span></h5>
            </div>
            <ul className='list list--icon'>
              <li><p><span className='lnr lnr-checkmark-circle'/>Nulla tellus elit, varius non commodo eget</p></li>
              <li><p><span className='lnr lnr-checkmark-circle'/>Cum sociis natoque penatibus</p></li>
              <li><p><span className='lnr lnr-checkmark-circle'/>Curabitur bibendum ornare dolor</p></li>
            </ul>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default translate('common')(SimpleIconsList);
