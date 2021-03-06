import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom'
import Image404 from '../../../img/404/404.png';

export default class NotFound404 extends PureComponent {
  render() {
    return (
      <div className='not-found'>
        <div className='not-found__content'>
          <img className='not-found__image' src={Image404} alt='404'/>
          <h3 className='not-found__info'>Ooops! The page you are looking for could not be found :(</h3>
          <Link className='btn btn-primary' to='/dashboard_default'>Back Home</Link>
        </div>
      </div>
    )
  }
}