import React from 'react';
// import PropTypes from 'prop-types';
import { Segment, Divider, Item, Header } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import Fa from '../../../../components/common/Fa';

const CompanyProfile = () => (
  <Segment>
    <Item.Group>
      <Item>
        <Item.Image
          rounded
          bordered
          size="small"
          src="http://www.hondanews.ca/Content/hondanews.ca/51ef4295-3e6f-4479-a820-12c9fbbf3b6e/PressRelease/Preview_Honda%20Automotive.png"
        />

        <Item.Content>
          <Item.Header>Honda Türkiye A.Ş.</Item.Header>
          <Item.Meta>
            <span className="cinema">
              <Fa icon="phone" className="c-blue" /> +90 544 444 44 44
            </span>
          </Item.Meta>
          <Item.Meta>
            <span className="cinema">
              <Fa icon="fax" className="c-blue" /> +90 212 534 45 45
            </span>
          </Item.Meta>
          <Item.Meta>
            <span className="cinema">
              <Fa icon="envelope" className="c-blue" /> info@honda.com.tr
            </span>
          </Item.Meta>
          <Item.Meta>
            <span className="cinema">
              <Fa icon="map" className="c-blue" /> Şekerpınar Mah. Yanyol Sok No:1 41398 Çayırova
              KOCAELİ
            </span>
          </Item.Meta>
        </Item.Content>
      </Item>
    </Item.Group>
    <Divider fitted />

    <Header as="h3">
      <FormattedMessage id="general.greeting" defaultMessage="SAYIN" /> YÖNSİS BİLGİS.SİS.SAN.VE
      TİC.A.Ş.
      <Header.Subheader textAlign="left">
        <strong>
          <FormattedMessage id="reconciliation.number" defaultMessage="Mutabakat Numarası" />:
        </strong>{' '}
        2000000000001264
      </Header.Subheader>
      <Header.Subheader>
        <strong>
          <FormattedMessage id="reconciliation.term" defaultMessage="Mutabakat Dönemi" />:
        </strong>{' '}
        02/2011
      </Header.Subheader>
    </Header>
  </Segment>
);

CompanyProfile.propTypes = {};
CompanyProfile.defaultProps = {};

export default CompanyProfile;
