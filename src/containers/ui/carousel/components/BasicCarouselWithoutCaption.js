import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import Carousel from '../../../../components/carousel/CarouselSingle';
import {translate} from 'react-i18next';

const Slide1 = process.env.PUBLIC_URL + '/img/5.png';
const Slide2 = process.env.PUBLIC_URL + '/img/6.png';

class BasicCarouselWithoutCaption extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Col md={12} lg={6} xl={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>{t('ui_elements.carousel.basic_carousel_without_caption')}</h5>
              <h5 className='subhead'>Use the component <span className='red-text'>CarouselSingle</span></h5>
            </div>
            <Carousel>
              <div>
                <img src={Slide1} alt='slide'/>
              </div>
              <div>
                <img src={Slide2} alt='slide'/>
              </div>
              <div>
                <img src={Slide1} alt='slide'/>
              </div>
              <div>
                <img src={Slide2} alt='slide'/>
              </div>
            </Carousel>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default translate('common')(BasicCarouselWithoutCaption);
