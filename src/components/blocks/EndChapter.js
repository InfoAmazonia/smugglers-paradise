import React, { Component } from "react";
import styled, { css } from "styled-components";
import { media } from "styles/utils";
import { margins } from "./utils";

const phabletML = '4vw';
const desktopML = '8vw';

const Wrapper = styled.div`
  padding: 1rem 0;
  background: #f7f7f7;
  margin: 0 4vw 4vh 4vw;
  position: relative;
  z-index: 1;
  width: 90vw;
  ${media.desktop`
    width: 51vw;
    // margin: 0 3vw;
    margin-bottom: 1.5rem;
    ${props => css`
      float: ${props.float || "left"};
    `}
  `}
  ${media.desktopHD`
    margin: 0 4vw 4vh 4vw;
  `}
  .end-chapter-content {
    margin: 0 1vw;
    position: relative;
    display: block;
  }
  .end-chapter-content > .smaller-txt {
    font-size: .6em;
    padding: 0 5px;
    ${media.desktopHD`
      padding: 0;
    `}
  }
  .end-chapter-content > .medium-txt {
    font-size: .8em;
    padding: 0 5px;
    ${media.desktopHD`
      padding: 0;
    `}
  }
  .end-chapter-content .solo-quote {
    font-size: .9em;
  }
  .end-chapter-content > .regular-txt {
    font-size: 1em;
    padding: 0 10px;
    // ${media.desktopHD`
    //   padding: inherit;
    // `}
  }
  .end-chapter-content > div {
    font-weight: bold !important;
  }
  .end-chapter-content >  {
    ${media.phone`
      padding: 0 10px;
    `}
    ${media.desktopHD`
      padding: inherit;
    `}
  }
  .end-chapter-content > .pull-left {
    display: block;
    width: 85vw;
    margin-left: 2vw;
    ${media.phablet`
      width: 80vw;
      margin-left: ${phabletML};
    `}
    ${media.desktop`
      width: 55%;
      margin-right: 45%;
      margin-left: 0;
    `}
  }
  .end-chapter-content > strong {
    margin-left: 3vw;
    ${media.phablet`
      margin-left: ${phabletML};
    `}
    ${media.desktop`
      margin-left: 0;
    `}
  }
  .end-chapter-content > .regular-title {
    margin-left: 3vw;
    ${media.phablet`
      margin-left: ${phabletML};
    `}
    ${media.desktop`
      margin-left: 8px;
    `}
  }
  .end-chapter-content > .image-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
    ${media.phablet`
      width: 91%;
      flex-direction: row;
      margin-left: ${phabletML};
    `}
    ${media.desktop`
      width: 100%;
      margin-left: 0;
    `}
  }
  .graph-description {
    font-size: 1em;
    opacity: .5;
    font-weight: 400;
    width: 85vw;
    margin-left: 3vw;
    ${media.phablet`
      margin-left: 0;
    `}
  }
`;

function hideIframeTitle() {
  let iframe = document.querySelector('#datawrapper-chart-AMEaF');
  var elmnt = iframe.contentWindow.document.getElementByTagName('div')[0];
  elmnt.style.display = none;
}


export default ({ children }) => (
  <Wrapper>
    <span className="end-chapter-content">{children}</span>
  </Wrapper>
);