import React, { Component } from 'react';
import styled from 'styled-components';
import { media, color } from 'styles/utils';
import { NavLink, Link } from 'react-router-dom';
import {BrowserView,MobileView,isBrowser,isMobile} from "react-device-detect";

import SiteTitle from './SiteTitle';

const Wrapper = styled.header`
  flex: 0 0 auto;
  padding: .5rem 1rem;
  // background: #f3f3f3;
  .header-content {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    margin: 0 auto;
  }
  ${media.phone`

  `}
  ${media.phablet`
    padding: 1rem;
    font-size: 1em;
  `}
  ${media.tablet`
    .logo {
      width:3.5rem;
      margin:0px;
    }
  `}
  ${media.desktop`
    //padding: 1.5vw 8vw;
    h1 {
      color:#ffffff;
    }
    .header-content {
      float: right;
    }
    .logo {
      width:5rem;
      margin:0px;
    }
  `}
  ${media.desktopHD`
    //padding: 1.5vw 10vw;
    h1 {
      color:#ffffff;
    }
    .header-content {
      float: right;
    }
    .logo {
      width:5rem;
      margin:0px;
    }
  `}
  .site-title {
    flex: 1 1 100%;
    font-size: .6em;
  }
`

class HeaderIntro extends Component {
  render () {
    const { props } = this;
    const logoIndex = props.logo || 0;
    return (
      <Wrapper>
        <div className="header-content">
        { isBrowser &&
            <SiteTitle logo="0" />
        } 
        
        </div>
      </Wrapper>
    )
  }
}

export default HeaderIntro;
