import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const Title = styled.h1`
  margin-top: 10px;
`;

const HomePage = () => (
  <div>
    <Title>
      <FormattedMessage id="general.greetings" defaultMessage="hosgelmissiniz" />
    </Title>
  </div>
);

export default HomePage;
