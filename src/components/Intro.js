import React, { Component } from "react";
import ReactMapGL from 'react-map-gl';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { media } from "styles/utils";
import { injectIntl, intlShape } from "react-intl";
import { Redirect,withRouter } from "react-router-dom";
import FormattedMessageFixed from "components/blocks/FormattedMessageFixed";
import IntroTransaction from 'components/IntroTransaction';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiaW5mb2FtYXpvbmlhIiwiYSI6ImNtNzB5YWc2MzA3aWUya3ByMHkyYm54eXUifQ.twxY-J7bMuqjDUlSAIPoag'; // Set your mapbox token here

const Overlay = styled.section`
  ${media.phone`
    // position: static;
    // margin-top:1rem;
    // padding: 10px;
    // z-index: 1;
    position: static;
    margin-top:1rem;
    padding: 10px;
    z-index: 1;
  `}
  ${media.phablet`
    // position: absolute;
    // bottom:0px;
    // margin-top:0rem;
    // padding: 0px;
    // z-index: 1;
    position: static;
    margin-top:1rem;
    padding: 10px;
    z-index: 1;
  `}
  ${media.desktop`
    position: absolute;
    width: 25%;
    top: 40%;
    left: 0;
    padding: 10px;
    z-index: 1;
  `}
  ${media.desktopHD`
    position: absolute;
    width: 25%;
    top: 40%;
    left: 0;
    padding: 10px;
    z-index: 1;
  `}
  .map-overlay {
    font-size: .9rem;
    background-color: #fff;
    ${media.phone`
      box-shadow: none;
      padding: 0 15px;
    `}
    ${media.phablet`
      box-shadow: none;
      padding: 0 15px;
    `}
    ${media.desktop`
      box-shadow:0 1px 2px rgba(0,0,0,0.20);
      padding: 15px;
    `}
    ${media.desktopHD`
      box-shadow:0 1px 2px rgba(0,0,0,0.20);
      padding: 15px;
    `}
  }
  .map-overlay h2, .map-overlay p {
    margin: 0 0 10px;
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-column-gap: 15px;
    grid-row-gap: 0px;
      ${media.phone`
        grid-template-columns: auto auto auto auto auto;
        grid-column-gap: 5px;
        grid-row-gap: 0px;
      `}
      ${media.tablet`
        grid-template-columns: auto auto auto auto auto;
        grid-row-gap: 30px;
        grid-column-gap: 50px;
      `}
      ${media.phablet`
        grid-template-columns: auto auto auto auto auto;
        grid-column-gap: 15px;
        grid-row-gap: 0px;
        margin-bottom: 1rem;
      `}
      ${media.desktop`
        grid-template-columns: auto auto auto auto auto;
        grid-row-gap: 0px;
        grid-column-gap: 10px;
        margin-bottom: 0px;
      `}
      ${media.desktopHD`
        grid-template-columns: auto auto auto auto auto;
        grid-row-gap: 0px;
        grid-column-gap: 10px;
        margin-bottom: 0px;
      `}
  }
  .grid-container > div {
    text-align: center;
    padding: 0px;
  }`;

  var title = {}
  var description = {}

  var locations = [
    {
      "id": 0,
      "slide": 1,
      "title": "intro.title1",
      "description":"intro.text1",
      "camera": {
      center: [-66.484489, 6.917248],
      zoom: 4.77,
      bearing: 0,
      pitch: 0
      },
      "fitBoundsCoords": [[-88.1315403090528, -9.921248670028632], [-44.837437690917284, 23.179933818133662]],
      "showLayers":[''],
      "maxZoom": 4.99,
  },
  {
      "id": 1,
      "slide": 2,
      "title": "intro.title2",
      "description":"intro.text2",
      "camera": {
        center: [-67.305707, 5.711382],
        zoom: 6.04,
        bearing: 0,
        pitch: 30.00
      },
      "fitBoundsCoords": [[-74.0027, -0.50670], [-60.5848, 11.6935]],
      "showLayers":['PNYapacana_nacionales_LABEL', 'PNYapacana_nacionales', 'cidadesfronteraCO','CO-VE_admin-0-boundary'],
      "maxZoom": 6.99,
  }, {
      "id": 2,
      "slide": 3,
      "title": "intro.title3",
      "description":"intro.text3",
      "camera": {
        center: [-73.673727, 10.722255],
        zoom: 5.49,
        bearing: 0,
        pitch: 60.00
      },
      "fitBoundsCoords": [[-78.2358, 3.88104], [-70.7960, 18.6239]],
      "showLayers":['PNYapacana_nacionales_LABEL', 'PNYapacana_nacionales', 'cidadesfronteraCO','CO-VE_admin-0-boundary'],
      "maxZoom": 5.99,
  }, {
      "id": 0,
      "slide": 4,
      "title": "intro.title4",
      "description":"intro.text4",
      "camera": {
        center: [-69.441990, 11.761046],
        zoom: 7.57,
        bearing: 0,
        pitch: 10.00
      },
      "fitBoundsCoords": [[-70.1806, 11.8450], [-68.7401, 12.5916]],
      "showLayers":['cidadesfronteraCO'],
      "maxZoom": 7.99,
  }, {
      "id": 3,
      "slide": 5,
      "title": "intro.title5",
      "description":"intro.text5",
      "camera": {
      center: [-41.680000, 27.970000],
      zoom: 3.32,
      bearing: 0,
      pitch: 30.00
      },
      "fitBoundsCoords": [[-76.4446, -1.818581], [6.44676, 53.1746]],
      "showLayers":['NL_admin-0-boundary'],
      "maxZoom": 3.99,
  },{
    "id": 0,
    "slide": 0,
    "title": "intro.title0",
    "description":"intro.text0",
    "camera": {
    center: [-66.484489, 6.917248],
    zoom: 4.77,
    bearing: 0,
    pitch: 0
    },
    "fitBoundsCoords": [[-88.1315403090528, -9.921248670028632], [-44.837437690917284, 23.179933818133662]],
    "showLayers":[''],
    "maxZoom": 4.99,
}];
// const map = '';
class Intro extends Component {

  constructor(props) {

    super(props);
    this.setRedirect = this.setRedirect.bind(this);
    this.state = {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: 6.917248,
        longitude: -66.484489,
        zoom: 4.77,
      },
      center: [-66.484489, 6.917248],
      settings: {
        dragPan: false,
        dragRotate: false,
        scrollZoom: false,
        touchZoom: false,
        touchRotate: false,
        keyboard: false,
        doubleClickZoom: false,
        minZoom: 0,
        maxZoom: 20,
        minPitch: 0,
        maxPitch: 85
      },
      content: {
        title:locations[locations.length - 1].title,
        description:locations[locations.length - 1].description,
        slide:locations[locations.length - 1].slide
      },
      redirect: false,
    }
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/story?show=intro' />
    }
  }

  setRedirect() {
    this.setState({
      redirect: true
    })
  }

  componentDidMount() {
    // Display the last title/description first
    const scope = this;
    const map = this._map.getMap()
    var location = this.props.intl.locale
    //console.log('location 2')
    //console.log(location)
    if (location != 'en' && location != 'es' && location != 'pt') {
      location = 'en';
    }
    //var bbox = [[-65, 7], [-70, -7]];
    // map.fitBounds(bbox, {
    //   padding: {top: 0, bottom:0, left: 0, right: 0}
    // });
    map.on('load', function() {
      map.setLayoutProperty('country-label-', 'text-field', ['get', 'name_'+location]);
      map.addLayer({
        "id": "highlight",
        "type": "fill",
        "source": {
          "type": "vector",
          "url": "mapbox://infoamazonia.1w2pvk3g"
          },
          "source-layer": "Arrows_merged_Yap-4dsic3",
          "paint": {"fill-color": "hsl(344, 91%, 50%)"},
          "filter": ["==", "id", ""]
        });

        scope.playback(locations.length - 1,map);
    })

  }

  _onViewportChange = viewport => {
    this.setState({viewport});
  }

  highlightBorough(code,map) {
    // Only show the polygon feature that cooresponds to `borocode` in the data
    map.setFilter('highlight', ["==", "id", code]);
  }

  playback(index,map) {
    //index = 3;
    if (index == (locations.length - 1)) {
      map.setLayoutProperty('PNYapacana_nacionales_LABEL', 'visibility', 'none');
      map.setLayoutProperty('PNYapacana_nacionales', 'visibility', 'none');
      map.setLayoutProperty('cidadesfronteraCO', 'visibility', 'none');
      map.setLayoutProperty('NL_admin-0-boundary', 'visibility', 'none');
      map.setLayoutProperty('CO-VE_admin-0-boundary', 'visibility', 'none');
    }

    locations[index].showLayers.sort().map( function(currentLayer,subindex) {
      var lastLayerArr = locations[(index-1 < 0 ? locations.length - 1 : index-1)].showLayers.sort();
      var lastLayer = lastLayerArr[subindex];
      //hide currents layers
      if (lastLayer != undefined) {
        map.setLayoutProperty(lastLayer, 'visibility', 'none');
      }

      //show currents layers
      if (currentLayer != undefined) {
        map.setLayoutProperty(currentLayer, 'visibility', 'visible');
      }
    })
    //debugger;
    this.setState({content:{title:locations[index].title,description:locations[index].description,slide:locations[index].slide}});
    const scope = this;
    this.highlightBorough(locations[index].id ? locations[index].id : '',map);
    //console.log(locations[index].slide)
    //console.log(map.getBounds())

    map.fitBounds(locations[index].fitBoundsCoords,{pitch:locations[index].camera.pitch,maxZoom:locations[index].maxZoom});
    //map.flyTo(locations[index].camera);
    map.once('moveend', function() {
        // Duration the slide is on screen after interaction
        window.setTimeout(function() {
        // Increment index or redirect to story page
        //console.log('moveend')

        //console.log(locations[index].slide)
        //index = (index + 1 === locations.length) ? 0 : index + 1;
        //scope.playback(index,map);
        if (locations[index].slide === 5) {
          //document.location.href = '/story?show=intro'
          setTimeout(function() {
            document.getElementById('intro_transtion_overlay').classList.add("active");
            setTimeout(function() {
              scope.setRedirect()
            }.bind(this), 2600)
          }.bind(this), 1500)
          return;
        } else {
          index = (index + 1 === locations.length) ? 0 : index + 1;
          scope.playback(index,map);
        }
      }, 7500); // After callback, show the location for 6 seconds.
    });
  }

  render() {
    const {intl} = this.props;
    const {viewport,settings,content} = this.state;
    //console.log('location');
    //console.log(this.props.intl.locale);
    //inglês
    var defaultMapStyle = 'mapbox://styles/infoamazonia/cjxxfhrimbuhb1cmshwpbuljg';
    if (this.props.intl.locale.search('es') > -1) {
      //espanhol
      defaultMapStyle = 'mapbox://styles/infoamazonia/cjy0ot0ew036b1cohdtzyxm60';
    } else if (this.props.intl.locale.search('pt') > -1) {
      //portugues
      defaultMapStyle = 'mapbox://styles/infoamazonia/cjy0ovcnx03b41cpbqcsyztl7';
    }
    //console.log('mapa')
    //console.log(defaultMapStyle)
    return (
      <div>
        {this.renderRedirect()}
        <Overlay>
          <div class='map-overlay'>
            <p id='location-description'><FormattedMessageFixed id={content.description} defaultMessage="description" /></p>
            {
              content.slide == 0 &&
                <div class="grid-container">
                  <div>
                    <img src={require('images/partners/media_outlets/correo_del_caroni_black.png')} />
                  </div>
                  <div>
                    <img src={require('images/partners/media_outlets/de_correspondent_logo_black.png')} />
                  </div>
                  <div>
                    <img src={require('images/partners/media_outlets/infoamazonia_black.png')} />
                  </div>
                  <div>
                    <img src={require('images/partners/media_outlets/runrun.png')} />
                  </div>
                  <div>
                    <img src={require('images/partners/media_outlets/miami_herald_black.png')} />
                  </div>
                </div>
            }
          </div>
        </Overlay>
        <ReactMapGL
          {...viewport}
          {...settings}
          ref={(c) => this._map = c}
          mapStyle={defaultMapStyle}
          onViewportChange={this._onViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN} >
        </ReactMapGL>
      </div>
    );
  }
}

Intro.propTypes = {
  viewportDimensions: PropTypes.object
};

Intro.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(withRouter(Intro));
