import styled from 'styled-components';
import Link from 'next/link';
import { H5, H4 } from '../styled/global';
import {
  HOSTadr,
  NumTVA,
  lastupdateCGV,
  RCSwhere,
  RCSnum,
  contactAdr,
  CNIL,
  contactMail,
  company,
  EdName,
  EdMail,
  www,
} from '../../config';

const InnerGrid = styled.div`
  padding-top: 4rem;
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr;
  max-width: ${props => props.maxWidth || '512px'};
  width: 100%;
  text-align: center;
  justify-self: center;
  align-self: start;
  margin-bottom: 5rem;
`;

const InfoCard = styled.div`
  padding: 1rem;
  font-size: 1.5rem;
  text-align: left;
  /* border-bottom: 1px solid black; */
  margin-bottom: 5rem;
  .h4bold {
    font-weight: 700;
  }
  ul {
    list-style-type: none;
    padding: 0;
    padding-bottom: 2rem;
    li {
      line-height: 2.6rem;
    }
  }
`;

const FakeAnchor = styled.div``;

const InnerFyi = props => (
  <InnerGrid maxWidth="720px">
    <InfoCard>
      <H4 className="h4bold"># nous contacter</H4>
      <div>par mail:{contactMail}</div>
      <FakeAnchor id="legal" />
    </InfoCard>

    <InfoCard>
      <H4 className="h4bold"># mentions légales</H4>
      <div>
        <H5>LA SOCIéTé</H5>
        <ul>
          <li>{company}</li>
          <li>
            {RCSwhere} sous le numéro {RCSnum}
          </li>
          <li>tva intracommunautaire: {NumTVA}</li>
          <li>siège social: {contactAdr}</li>
        </ul>
        <H5>HEBERGEMENT</H5>
        <ul>
          <li>{HOSTadr}</li>
        </ul>
        <H5>éDITEUR</H5>
        <ul>
          <li>{EdName}</li>
          <li>email: {EdMail}</li>
        </ul>
        <H5>DECLARATION CNIL</H5>
        <ul>
          <li>numéro de déclaration: {CNIL}</li>
        </ul>
        <H5>Propriété intellectuelle</H5>
        <ul>
          <li>
            Le site {www} à été entirement dévelopé en interne protégé par les
            droits sur la propriété intellectuelle. Toute copie, même partielle
            (texte ou photo) de quelques éléments que ce soit est strictement
            interdite sans l'accord préalable du responsable du site.
          </li>
        </ul>

        <H5>CONDITIONS GÉNÉRALES DE {company}</H5>
        <ul>
          <li>mise à jour {lastupdateCGV}</li>
          <li>
            <Link prefetch href="/static/pdf/cgv.pdf">
              <a target="_blank" title="CGV" aria-label="links">
                >> Conditions Générales de {www}
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <FakeAnchor id="data" />
    </InfoCard>

    <InfoCard>
      <H4 className="h4bold"># protections des données</H4>
      <div>
        <H5>Nos responsabilités</H5>
        <ul>
          <li>
            {company} s'interdit tout usage, à son profit ou au profit de qui
            que ce soit, de tout ou partie de vos données "privées".
          </li>
        </ul>

        <H5>Vos responsabilités</H5>
        <ul>
          <li>
            Lire la politique de confidentialité des données et les nouvelles
            conditions générales de ventes de {company}.
          </li>
          <li>
            Si vous êtes déjà client de {company}, vous devez lire et accepter
            les nouvelles conditions générales de ventes pour continuer à
            utiliser le service de vente enligne.
          </li>
          <li>
            Si vous n’êtes pas encore client, lors de la création de votre
            compte, vous aurez l’obligation de consulter et accepter ces
            fameuses conditions générales de ventes.
          </li>
        </ul>

        <H5>Nous utilisons des cookies</H5>
        <ul>
          <li>Cookie declaration last updated on 28/05/2019 by Cookiebot:</li>
        </ul>

        <H5>Comment nous garantissons la sécurité de vos données</H5>
        <ul>
          <li>
            Nous utilisons des mesures raisonnables organisationnelles,
            techniques et administratives afin de protéger les Données
            Personnelles au sein de notre organisation. Malheureusement, aucun
            système de stockage ou de transmission des données ne peut être
            garanti comme sûr à 100%. Si vous avez des raisons de penser que vos
            interactions avec nous ne sont plus sûres (par exemple si vous avez
            l’impression que la sécurité de votre compte a été compromise),
            veuillez nous contacter immédiatement.
          </li>
        </ul>

        <H5>Téléchargez notre politique de confidentialité</H5>
        <ul>
          <li>
            Si vous souhaitez avoir encore plus d'informations à propos de notre
            politique de confidentialité, vous pouvez la télécharger ici :
          </li>
          <li>
            <Link prefetch href="/static/pdf/cgv.pdf">
              <a target="_blank" title="CGV" aria-label="links">
                >>> Conditions Générales de {company}
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <FakeAnchor id="paiement" />
    </InfoCard>

    <InfoCard>
      <H4 className="h4bold"># moyens de paiements</H4>
      <div>Nous utilisons exclusivement le virement bancaire.</div>
      <FakeAnchor id="shipping" />
    </InfoCard>

    <InfoCard>
      <H4 className="h4bold"># livraison et suivi</H4>
      <div>
        Vos colis sont prisent en charge par UPS, un numéro de suivi vous sera
        transmit lors de l'envoie de votre commande.
      </div>
    </InfoCard>

    <InfoCard>
      <H4 className="h4bold"># réglementation</H4>
      <ul>
        <li>
          La vente de cigarette électronique et de e liquide est interdite aux
          mineurs.
        </li>
        <li>
          Tous e-liquides disponible sur "{www}" respect la lois Française
        </li>
      </ul>
      <FakeAnchor id="reglementations" />
    </InfoCard>
  </InnerGrid>
);

export default InnerFyi;
