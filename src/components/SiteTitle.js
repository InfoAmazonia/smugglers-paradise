import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { media, color } from 'styles/utils';
import { Link } from 'react-router-dom';

const logos = [
  require('images/novo_logo/logo_paraiso_branca.svg'),
  require('images/novo_logo/logo_paraiso_preta.svg')
];

const Title = styled.h1`
  display: block;
  margin: 0;
  font-size: .8em;
  line-height: 1;
  font-family: "Cinzel";
  color: #111;
  font-weight: normal;
  .logo {
    border-radius: 100%;
    float: left;
    margin-right: -2em;
  }
  a {
    color: inherit;
    &:hover,
    &:active,
    &:focus {
      color: inherit;
    }
  }
  ${media.desktop`
    font-size: 1em;
  `}
  img {
    height: auto;
    ${media.phone`
    width: 70%;
    `}
    ${media.tablet`
      margin-right: 2vw;
    `}
    ${media.desktop`
      margin-right: 3vw;
    `}
    ${media.desktopHD`
      margin-right: 3vw;
    `}
  }
  .title-text {
    float: left;
    ${media.phone`
      margin-top: .5em;
      margin-left: 0em;
      line-height: 0.5;
    `}
    ${media.tablet`
      margin-top: 1.3em;
      margin-left: 0em;
    `}
    ${media.desktop`
      margin-top: 1.5em;
      margin-left: .2em;
      line-height: 0;
    `}
    ${media.desktopHD`
      margin-top: 1.5em;
      margin-left: .2em;
      line-height: 0;
    `}
  }
  .title-item {
    display: inline-block;
    padding-right: .25em;
    font-size: .8em;
    white-space: nowrap;
    &.title-1 {
      font-size: 1.75em;
      font-weight: 700;
        ${media.phone`
        font-size: 1.15em;
    `}
    }
    &.title-2 {
      font-size: 1.75em;
      font-weight: 400; 
        ${media.phone`
        font-size: 1.15em;
        line-height: 2.5;
      `}
    }
    &.title-3 {
      display: block;
      letter-spacing: -.03em;
      font-size: 1.6em;
      font-weight: 700;
      padding: 0;
    }
  }
`
class SiteTitle extends Component {
  render () {
    const { props } = this;
    const logoIndex = props.logo || 0;
    return (
      <div className="site-title clearfix">
        <Title {...props}>
            <Link to="/">
              <span className="logo">
                <img src={logos[logoIndex]} alt=" " />
              </span>
              <span className="title-text">
                <span className="title-item title-1">
                  <FormattedMessage
                    id="general.siteTitle1"
                    defaultMessage="Venezuela," />
                </span>
                <br />
                <span className="title-item title-2">
                  <FormattedMessage
                    id="general.siteTitle2"
                    defaultMessage="THE SMUGGLERS" />
                </span>
                <br />
                <span className="title-item title-1">
                  <FormattedMessage
                    id="general.siteTitle3"
                    defaultMessage="PARADI$E" />
                </span>
              </span>
            </Link>
        </Title>
      </div>
    )
  }
}

export default SiteTitle;
