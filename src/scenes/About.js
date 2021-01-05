import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import {
  injectIntl,
  intlShape,
  defineMessages,
  FormattedMessage
} from "react-intl";
import Page from "components/Page";
import Container from "components/blocks/Container";
import Paragraph from "components/blocks/Paragraph";
import Title from "components/blocks/Title";
import GeneralBlock from "components/blocks/GeneralBlock";
import "styles/about.css";

import { Link } from "react-router-dom";

const messages = defineMessages({
  title: {
    id: "about.title",
    defaultMessage: "About"
  },
  siteTitle: {
    id: "head.title",
    defaultMessage: "Venezuela, the smugglers' paradise"
  }
});

const Button = styled.div`
  widht:100%;
  margin-top:9rem;
  text-align: center;
  a{
    margin:0 auto;
    font-family: 'Merriweather', serif;
    font-size: 0.5em;
    -webkit-letter-spacing: 0.1rem;
    -moz-letter-spacing: 0.1rem;
    -ms-letter-spacing: 0.1rem;
    letter-spacing: 0.1rem;
    display: inline-block;
    color: #000;
    border: 1px solid #000;
    text-align: center;
    padding: 0.75rem 1rem;
    font-weight: 600;
    width: 210px;
    text-transform: uppercase;
  }
`;

const About = ({ intl, lastPath }) => {
  const title = intl.formatMessage(messages.title);
  const siteTitle = intl.formatMessage(messages.siteTitle);
  return (
    <Page>
      <Helmet>
        <title>
          {title} | {siteTitle}
        </title>
      </Helmet>
      <section className="content">
        <Container>

          <Paragraph small>

            <FormattedMessage
              id="about.intro1"
              defaultMessage="This project is the result of a journalistic partnership between "
            />

            <strong>
            <FormattedMessage
              id="about.intro2"
              defaultMessage="Correo del Caroní"
            />
            </strong>

            <FormattedMessage
              id="about.intro3"
              defaultMessage=" (Venezuela), "
            />

            <strong>
            <FormattedMessage
              id="about.intro4"
              defaultMessage="De Correspondent"
            />
            </strong>

            <FormattedMessage
              id="about.intro5"
              defaultMessage=" (Netherlands), "
            />

            <strong>
            <FormattedMessage
              id="about.intro6"
              defaultMessage="InfoAmazonia"
            />
            </strong>

            <FormattedMessage
              id="about.intro7"
              defaultMessage=" (Brazil), "
            />

            <strong>
            <FormattedMessage
              id="about.intro8"
              defaultMessage="Miami Herald/Nuevo Herald"
            />
            </strong>

            <FormattedMessage
              id="about.intro9"
              defaultMessage=" (United States), and "
            />

            <strong>
            <FormattedMessage
              id="about.intro10"
              defaultMessage="Runrun.es"
            />
            </strong>

            <FormattedMessage
              id="about.intro11"
              defaultMessage=" (Venezuela). It was made possible by the "
            />

            <strong>
            <FormattedMessage
              id="about.intro12"
              defaultMessage="Human Rights Foundation"
            />
            </strong>

            <FormattedMessage
              id="about.intro13"
              defaultMessage=" and supported by a contribution from the "
            />

            <strong>
            <FormattedMessage
              id="about.intro14"
              defaultMessage="Dutch Fund for Journalism Projects."
            />
            </strong>
          </Paragraph>

          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.1"
                defaultMessage="Investigator in chief:"
              />
            </strong>
            <br />
            Bram Ebus
          </Paragraph>

          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.2"
                defaultMessage="Investigative reporters:"
              />
            </strong>
            <br />
            Algimiro Montiel
            <br />Antonio Maria Delgado
            <br />Bram Ebus
            <br />Jay Weaver
            <br />Jim Wyss
            <br />Jorge Benezra
            <br />Kyra Gurney
            <br />Nicholas Nehamas
            <br />Pamela Kalkman
          </Paragraph>

          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.3"
                defaultMessage="Editor in chief & Platform development coordinator:"
              />
            </strong>
            <br />
            Stefano Wrobleski
          </Paragraph>

          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.4"
                defaultMessage="Editors:"
              />
            </strong>
            <br />
            Casey Frank (Miami Herald)
            <br />Gustavo Faleiros (InfoAmazonia)
            <br />Lisseth Boon (Runrun.es)
            <br />Maaike Goslinga (De Correspondent)
            <br />María Ramírez Cabello (Correo del Caroní)
            <br />Marnix de Bruyne (De Correspondent)
            <br />Nancy San Martin (Miami Herald)
            <br />Rosan Smits (De Correspondent)
          </Paragraph>

          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.5"
                defaultMessage="Text translation to Spanish:"
              />
            </strong>
            <br />
            Isabel Sacco
            <br />Oscar Diaz
          </Paragraph>

          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.6"
                defaultMessage="Text translation to Portuguese:"
              />
            </strong>
            <br />
            Olga Bagatini
          </Paragraph>

          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.7"
                defaultMessage="Video editor:"
              />
            </strong>
            <br />
            Matheus Temporini
          </Paragraph>

          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.8"
                defaultMessage="Logomark Designer:"
              />
            </strong>
            <br />
            Donna Kether
          </Paragraph>

          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.9"
                defaultMessage="Map development:"
              />
            </strong>
            <br />
            Juliana Mori
          </Paragraph>

          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.10"
                defaultMessage="Website Development:"
              />
            </strong>
            <br />
            <a href="mailto:contato@studiocuboweb.com.br"> StudioCubo</a>
          </Paragraph>

          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.11"
                defaultMessage="Funding:"
              />
            </strong>
          </Paragraph>
          <GeneralBlock>
              <img src={require('images/partners/funders/HRF_black.png')} title='Human Rights Foundation' alt='Human Rights Foundation' style={{'margin':'1rem','height':'35px'}} align="left" />
              <img src={require('images/partners/funders/FBJP.svg')} title='Dutch Fund for Journalism Projects' alt='Dutch Fund for Journalism Projects' style={{'margin':'1rem','height':'41px'}}  align="right" />
          </GeneralBlock>
          <Paragraph>
            <Button>
              <div>
                {
                  lastPath &&
                    <Link to={lastPath}>
                      <span className="fa fa-arrow-left" />
                      <FormattedMessage
                        id="about.close"
                        defaultMessage="Continue Reading"
                      />
                    </Link>
                }
              </div>
            </Button>
          </Paragraph>
          <hr />
          <Paragraph small>
            <strong>
            <FormattedMessage
              id="about.12"
              defaultMessage="© 2019. All rights reserved."
            />
            </strong>
            <FormattedMessage
              id="about.13"
              defaultMessage=" To use any text, image or data from this project please contact InfoAmazonia at {INFO}"
              values={{
                INFO: (
                  <strong>
                    <a href="mailto:contato@infoamazonia.org">
                    <FormattedMessage
                      id="about.14"
                      defaultMessage="contact@infoamazonia.org"
                      />
                    </a>
                  </strong>
                )
              }}
            />
          </Paragraph>
        </Container>
      </section>
    </Page>
  );
};

About.propTypes = {
  intl: intlShape.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    lastPath: state.context.lastPath
  };
};

export default injectIntl(connect(mapStateToProps, null)(About));
