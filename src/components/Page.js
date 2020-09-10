import React, { Component } from 'react';
import styled from 'styled-components';

import Header from 'components/Header';
import ArticleNav from 'components/Nav';
import Content from 'components/Content';
import { FormattedMessage } from "react-intl";
import IntroTransaction from 'components/IntroTransaction';
import {BrowserView,MobileView,isBrowser,isMobile} from "react-device-detect";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  .pages-transition-enter {
    opacity: 0.01;
    transform: translate(1rem, 0);
    position: absolute;
  }
  .pages-transition-enter.pages-transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 600ms ease-in-out;
  }
  .pages-transition-exit {
    opacity: 1;
    transform: translate(0, 0);
  }
  .pages-transition-exit.pages-transition-exit-active {
    opacity: 0.01;
    transform: translate(-1rem, 0);
    transition: all 200ms ease-in-out;
    position: absolute;
  }
  a.continue {
    display: block;
    text-align: right;
    color: #333;
    .fa {
      margin-left: 1rem;
      font-size: .8em;
    }
  }
`;
// /
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLandscape: true
    };
  }
  componentDidMount() {
    var mql = window.matchMedia("(orientation: portrait)");
    // If there are matches, we're in portrait
    if(mql.matches) {  
      // Portrait orientation
      this.setState({isLandscape:false})
    }
    
    // Add a media query change listener
    var scope = this
    mql.addListener(function(m) {
        if(m.matches) {
          scope.setState({isLandscape:false})
        }
        else {
          scope.setState({isLandscape:true})
        }
    });
  }
  render () {
    return (
      <Wrapper>
        <Header />
        { (isBrowser || (isMobile && this.state.isLandscape)) &&
           <div>
            <ArticleNav />
            </div>
          }
        <Content>
          {this.props.children}
        </Content>
        <IntroTransaction />
      </Wrapper>
    )
  }
}

export default Page;