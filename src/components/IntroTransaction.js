import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { injectIntl,FormattedMessage } from "react-intl";

const Wrapper = styled.div`
    #intro_transtion_overlay {
        position:fixed;
        display:block;
        padding:0;
        margin:0;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        z-index:888801799999999;
        background:rgba(0,0,0,0);
        text-align: center;
    }
    #intro_transtion_overlay.up {
        z-index:888801799999999;
        background:rgba(0,0,0,1);
        height: 0;
        transition: height 1s;
    }
    #intro_transtion_overlay.active {
        -webkit-transition: background 0.5s ease-out;
        -moz-transition: background 0.5s ease-out;
            -o-transition: background 0.5s ease-out;
                transition: background 0.5s ease-out;
        background:rgba(0,0,0,1);
    }
    #intro_transtion_overlay>span {
        width:100px;
        padding-bottom:15px;
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        margin: 0 auto;
    }
    #intro_transtion_overlay>span>p {
        width:50px;
        margin: 10px auto;
    }
    #intro_transtion_overlay>span>a {
      color:rgb(151,151,151);
    }
`;

class IntroTransaction extends Component {

    constructor(){
      super()
      this.handleScroll = this.handleScroll.bind(this);
      this.setRedirect = this.setRedirect.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        redirect: false
      }
    }

  
    renderRedirect = () => {
      if (this.state.redirect) {
        //console.log('redirecionado');
        return <Redirect to='/story?show=intro' />
      }
    }
  
    componentDidMount() {
      var location = document.location.href;
      //console.log('LOCATION')
      //console.log(location)
      if (location.search('/intro') <= -1) {
        if (location.search("show=intro") > -1) {
          //console.log('entrou no if')
          document.getElementById('intro_transtion_overlay').classList.add('up');
        } else { 
          //console.log('entrou no if para desabilitar o div overlay')
          document.getElementById('intro_transtion_overlay').remove();
        }
        window.removeEventListener('wheel', this.handleScroll)
        window.removeEventListener('touchmove', this.handleScroll)
      } else {
        window.addEventListener('wheel', this.handleScroll, { passive: true })
        window.addEventListener('touchmove', this.handleScroll, { passive: true })
      }   
    }
  
    componentWillUnmount() {
      window.removeEventListener('wheel', this.handleScroll)
      window.removeEventListener('touchmove', this.handleScroll)
    }

    handleScroll() {
      document.getElementById('intro_transtion_overlay').classList.add("active");
      setTimeout(function() {
        this.setRedirect()
      }.bind(this), 500)
    }
    setRedirect() {
      this.setState({
        redirect: true
      })
    }

    handleClick(ev) {
      document.getElementById('intro_transtion_overlay').classList.add("active");
      setTimeout(function() {
        this.setRedirect()
      }.bind(this), 500)
      ev.preventDefault();
    }

    render () {
        return (
      <Wrapper>
        {this.renderRedirect()}
        <div id="intro_transtion_overlay">
          <span>
            <a href="#" onClick={this.handleClick}>
            <FormattedMessage
              id="intro.skip"
              defaultMessage="Skip Intro"
            />
            <p><i class="arrow down"></i></p>
            </a>
          </span>
        </div>
      </Wrapper>
    )}
  }
  
  export default (IntroTransaction);