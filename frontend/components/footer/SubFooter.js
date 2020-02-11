import styled from 'styled-components';
import { ContainerGrid, H2, H4 } from '../styled/global';

const SubFoot = styled.div`
  background: black;
  color: white;
`;

const Favors = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem 2rem;
  max-width: ${props => props.maxWidth || '75%'};
  width: 100%;
  font-size: ${props => props.ftSize || '1.4rem'};
  text-align: center;
  justify-self: center;
  align-self: start;
  color: white;
  i {
    padding-top: 5rem;
    font-size: 3.5rem;
  }
  p {
    padding-bottom: 5rem;
    font-weight: 300;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 0rem 0rem;
    i {
      padding-top: 1rem;
    }
    p {
      padding-bottom: 1rem;
    }
  }
`;

const SubFooter = props => (
  <SubFoot>
    <H2 pt="5rem">avantages e-commerce</H2>
    <ContainerGrid bgColor="black" ftColor="white">
      <Favors>
        <div>
          <i className="fas fa-archive" />
          <H4 pt="1.8rem">livraison offerte</H4>
          <p>Livraison standard offerte pour toute commande</p>
        </div>
        <div>
          <i className="fas fa-reply" />
          <H4 pt="1.8rem">retours offerts</H4>
          <p>Retours sous 14 jours offerts pourt toute commande</p>
        </div>
        <div>
          <i className="fas fa-piggy-bank" />
          <H4 pt="1.8rem">fidélité récompensée</H4>
          <p>Avantage rapide sur toutes vos commandes régulières</p>
        </div>
      </Favors>
    </ContainerGrid>
  </SubFoot>
);

export default SubFooter;
