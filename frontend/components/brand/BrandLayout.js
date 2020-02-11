import styled from 'styled-components';
import Link from 'next/link';
import { H4, BtnJad } from '../styled/global';

const BrandGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const BrandSubGrid = styled.div`
  padding-top: 4rem;
  display: grid;
  grid-template-columns: 1fr;
  max-width: ${props => props.maxWidth || '512px'};
  width: 100%;
  text-align: center;
  justify-self: center;
  align-self: start;
  margin-bottom: 5rem;
  hr {
    border-top: 1px solid ${props => props.theme.lightgrey};
    width: 100%;
  }
`;

const BrandInner = styled.div`
  display: grid;
  grid-template-rows: auto 200px 60px auto;
  justify-self: center;
  align-self: center;
  img {
    height: 200px;
    object-fit: contain;
    max-width: 512px;
  }
  padding-bottom: 4rem;
  padding-top: 2rem;
`;

const Social = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem 2rem;
  max-width: ${props => props.maxWidth || '120px'};
  width: 100%;
  font-size: ${props => props.ftSize || '2.4rem'};
  text-align: center;
  justify-self: center;
  align-self: start;
  a {
    transition: color 0.2s ease-in-out, color 0.4s ease-in-out;
  }
`;

const BrandLayout = props => (
  <BrandGrid>
    <BrandSubGrid>
      <BrandInner>
        <H4>OKAMI BRAND</H4>
        <img
          src="https://res.cloudinary.com/jadistrib/image/upload/v1549656598/brands/okami.png"
          alt="ok"
        />
        <BtnJad>
          <Link prefetch href="/">
            <a title="voir les produits">voir les produits</a>
          </Link>
        </BtnJad>
        <Social>
          <Link href="/">
            <a target="_blank">
              <i className="fas fa-external-link-square-alt" />
            </a>
          </Link>
          <Link href="/">
            <a target="_blank">
              <i className="fab fa-instagram" />
            </a>
          </Link>
          <Link href="/">
            <a target="_blank">
              <i className="fab fa-facebook-f" />
            </a>
          </Link>
        </Social>
      </BrandInner>
      <hr />
      <BrandInner>
        <H4>THE FINEST</H4>
        <img
          src="https://res.cloudinary.com/jadistrib/image/upload/v1555480124/brands/001_The_Finest_Main_Logo_-_Black.png"
          alt="ok"
        />
        <BtnJad>
          <Link prefetch href="/">
            <a title="voir les produits">voir les produits</a>
          </Link>
        </BtnJad>
        <Social>
          <Link href="/">
            <a target="_blank">
              <i className="fas fa-external-link-square-alt" />
            </a>
          </Link>
          <Link href="/">
            <a target="_blank">
              <i className="fab fa-instagram" />
            </a>
          </Link>
          <Link href="/">
            <a target="_blank">
              <i className="fab fa-facebook-f" />
            </a>
          </Link>
        </Social>
      </BrandInner>
    </BrandSubGrid>
  </BrandGrid>
);
export default BrandLayout;
