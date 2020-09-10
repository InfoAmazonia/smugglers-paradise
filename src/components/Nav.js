import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { media } from 'styles/utils';
import { Collapse } from 'react-collapse';
import {BrowserView,MobileView,isBrowser,isMobile,isTablet} from "react-device-detect";
import LanguageSelect from "components/LanguageSelect";

const Wrapper = styled.nav`
  font-family: "Cinzel", serif;
  font-weight: 600;
  font-size: .4em;
  text-align: left;
  background: #f7f7f7;
  // box-shadow: 0 .2rem .5rem rgba(0,0,0,0.05);
  position: relative;
  z-index: 10;
  flex: 0 0 auto;
  .nav-box {
    ${media.phone`
      position: fixed;
      top: 3.9rem;
      left: 0;
      background-color: #f7f7f7;
      width:100%;
    `}
    ${media.phablet`
      position: fixed;
      top: 78px;
      left: 0;
      background-color: #f7f7f7;
      width:100%;
    `}
    ${media.tablet`
      position: fixed;
      top: 78px;
      left: 0;
      background-color: #f7f7f7;
      width:100%;
    `}
    ${media.desktop`
      position: static;
    `}
    ${media.desktopHD`
      position: static;
    `}
  }
  ol {
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
      margin-left: 15px;
      margin-top: 7px;
      margin-bottom: 3px;
      padding: 0;
      line-height: 1;
      overflow: hidden;
      a {
        z-index: 1;
        color: #aaa;
        padding: .5rem;
        text-transform: uppercase;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-bottom: 1px solid #ddd;
          transition: all .2s ease-in-out;
          z-index: 2;
        }
        &:hover,
        &:active,
        &:focus {
          color: #333;
        }
        &.active {
          color: #333;
          background: #fff;
          .progress {
            height: 1px;
            background: #f09429;
            box-shadow: 0 0 .5rem #f09429;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    li {
      a {
        font-size: 0.8rem
      }
    }
    ol li {
      padding: 1.1rem 0 1rem .5rem;
    }
  }
  // ${media.phablet`
  //   ol li a {
  //     padding: 1rem 0 1rem .5rem;
  //   }
  // `}
  ${media.tablet`
    font-size: .6em;
  `}
  ${media.desktop`
    text-align: center;
    ol {
      display: table;
      table-layout: fixed;
      width: 100%;
      li {
        display: table-cell;
        position: relative;
        a {
          position: relative;
          display: block;
          .progress {
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            height: 1px;
            background: #bbb;
          }
          &:active,
          &:focus {
            color: #333;
          }
          &.active {
            color: #333;
            background: #fff;
            .progress {
              height: 1px;
              background: #f09429;
              box-shadow: 0 0 .5rem #f09429;
            }
          }
        }
      }
    }
    ol li a {
      padding: 1rem 0 1rem .5rem;
    }
  `}
  ${media.desktopHD`
    font-size: .7em;
  `}

  //////////

  
  .menu-icon-wrapper {
    padding: 4px;
    background-color: #f3f3f3;
    border-bottom-right-radius: 2px;
    ${media.desktop`
      padding: 0;
    `}
  }
  .menu-toggle {
    height: 11px;
    width: 19px;
    // position: absolute;
    left: 15px;
    top: 5px;
    cursor: pointer;
    margin-left: 0;
    font-size:1.2rem;
    ${media.desktop`
      display: none;
    `}
  }
`

const mapStateToProps = (state, ownProps) => {
  return {
    scrolls: state.context.storyScroll,
    heights: state.context.storyHeight
  }
}

const ProgressBar = connect(mapStateToProps)(({ ...props }) => {
  const { scrolls, heights, path } = props;
  if(path) {
    let progress = 0;
    if(scrolls[path] && heights[path]) {
      progress = scrolls[path]/heights[path]*100;
    }
    return (
      <span className="progress" style={{
        width: progress + '%'
      }} />
    )
  } else {
    return null;
  }
})
class ArticleNav extends Component {

  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.checkResize = this.checkResize.bind(this);
    this.state = {
      collapsed: false,
      isLandscape: true
    };
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    //console.log('Browser View')
    //console.log(BrowserView)
    //console.log('isBrowser')
    //console.log(isBrowser)
    //console.log('isMobile')
    //console.log(isMobile)
    var mql = window.matchMedia("(orientation: portrait)");
    // If there are matches, we're in portrait
    var isLandscape = true;
    if(mql.matches) {  
      // Portrait orientation
      isLandscape = false;
      this.setState({isLandscape:false})
      console.log('portrait')
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
    if (isBrowser || (isMobile && isLandscape) ) {
      this.setState({
        collapsed: true
      });
    }
    window.addEventListener("resize", this.checkResize.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    console.log('componentWillUnmount')
    window.removeEventListener("resize", this.checkResize.bind(this));
  }

  checkResize() {
    console.log('checkResize')
    if ((((typeof window.orientation == "undefined") || (typeof window.orientation == "number")) && (navigator.userAgent.indexOf('IEMobile') == -1))) {
      this.setState({
        collapsed: true
      });
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  closeNavbar() {
    if (isBrowser || (isMobile && this.state.isLandscape)) {
      this.setState({
        collapsed: true
      });
    } else {
      this.setState({
        collapsed: false
      });
    }
  }

  render () {
    return (
      <Wrapper>
      <span className='menu-icon-wrapper'><i className="fa fa-bars menu-toggle" style={{'color':'#999999'}} onClick={() => this.toggleNavbar()}></i></span>
      <Collapse isOpened={this.state.collapsed} class='nav-box'>
        <div style={{'height':'100%','width':'100%'}}>
          <ol>
            <li onClick={() => this.closeNavbar()}>
              <NavLink exact to="/story">
                <FormattedMessage
                  id="articles.title1"
                  defaultMessage="Start" />
                <ProgressBar path="/story" />
              </NavLink>
            </li>
            <li onClick={() => this.closeNavbar()}>
              <NavLink to="/story/refugees">
                <FormattedMessage
                  id="articles.title2"
                  defaultMessage="Refugees" />
                <ProgressBar path="/story/refugees" />
              </NavLink>
            </li>
            <li onClick={() => this.closeNavbar()}>
              <NavLink to="/story/jungle-fever">
                <FormattedMessage
                  id="articles.title3"
                  defaultMessage="Jungle Fever" />
                <ProgressBar path="/story/jungle-fever" />
              </NavLink>
            </li>
            <li onClick={() => this.closeNavbar()}>
              <NavLink to="/story/caribbean-crossroads">
                <FormattedMessage
                  id="articles.title4"
                  defaultMessage="Caribbean Crossroads" />
                <ProgressBar path="/story/caribbean-crossroads" />
              </NavLink>
            </li>
            <li onClick={() => this.closeNavbar()}>
              <NavLink to="/story/around-the-world">
                <FormattedMessage
                  id="articles.title5"
                  defaultMessage="Around The World " />
                <ProgressBar path="/story/around-the-world" />
              </NavLink>
            </li>
            {(isMobile && !this.state.isLandscape) && 
            <li style={{'marginLeft':'2rem'}}>
              <LanguageSelect />
            </li>
            }
          </ol>
        </div>
      </Collapse>
      </Wrapper>
    )
  }
}

export default ArticleNav;
