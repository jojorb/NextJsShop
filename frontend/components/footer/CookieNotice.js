import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Cookie from 'js-cookie';
import { parseCookies } from '../../lib/parseCookies';

const CnBar = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.6rem;
  background: #232c41;
  display: block;
  position: fixed;
  bottom: 0px;
  width: 100%;
  left: 0px;
  color: #fff;
  width: 100%;
`;

const NoticeLayer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  padding: 2rem;
`;

const CookieNotice = ({ initialRememberValue }) => {
  console.log('values:', initialRememberValue);

  const [allowCookie, setallowCookie] = useState(false);
  // const [allowCookie, setallowCookie] = useState(() => {
  //   JSON.parse(initialRememberValue);
  // });

  useEffect(() => {
    Cookie.set('allowCookie', allowCookie);
  }, [allowCookie]);
  // useEffect(() => {
  //   Cookie.set('allowCookie', JSON.stringify(allowCookie));
  // }, [allowCookie]);

  return (
    <CnBar>
      <NoticeLayer>
        <div className="notice">blabla</div>
        <div className="accept">
          <input
            type="checkbox"
            value={allowCookie}
            checked={allowCookie}
            onChange={e => setallowCookie(e.target.checked)}
          />
        </div>
      </NoticeLayer>
    </CnBar>
  );
};

CookieNotice.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);

  return { initialRememberValue: cookies.allowCookie };
};

export default CookieNotice;
