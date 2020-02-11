import styled from 'styled-components';

const Misc = styled.div`
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: 1fr 3fr;
  text-align: left;
  padding: 2rem 4rem;
`;

const MiscTitle = styled.div`
  padding-right: 1.6rem;
  border-bottom: 1px solid ${props => props.theme.orange};
  margin-bottom: 1.2rem;
  text-transform: uppercase;
  font-size: 1.8rem;
`;

const MiscBody = styled.div`
  font-size: 1.4rem;
  grid-column: 1 / 3;
  margin-bottom: 1.8rem;
`;

const Miscellaneous = props => (
  <Misc>
    <MiscTitle>Composition</MiscTitle>
    <MiscBody>
      propylène glycol et de la glycérine végétale, de qualité pharmaceutique.
      Arômes alimentaires naturels et de synthèse. Ne contient pas de diacétyle,
      gomme, substances OGM, ni aucune des substances aromatiques allergènes
      soumises à une obligation de déclaration.
    </MiscBody>

    {props.cat === 'sel de nicotine' && (
      <>
        <MiscTitle>Le sel de nicotine</MiscTitle>
        <MiscBody>
          Les e-liquides au sel de nicotine... Le sel de nicotine, les nouveaux
          arrivants au sel de nicotine pourraient être un peu rebutés par leur
          nom. Ce n’est pas une poudre de sel solide qui est ensuite mélangée à
          un liquide. Au lieu de cela, c’est un sel chimique. Cependant, les
          sels de nicotine sont également fabriqués à partir de la forme la plus
          pure de la feuille de tabac. En chimie, un sel est une combinaison
          d'un alcali et d'un acide. Ces substances, l’alcali et la nicotine
          sont mélangés à un acide pour éliminer une partie de la dureté, en
          particulier à des concentrations plus élevées. Cela signifie à son
          tour que les sels de nicotine procurent une expérience de vape plus
          douce. Certaines marques vont utiliser l'acide benzoïque. Chez Juice
          Avenue et donc ({props.brand}) vous trouverez que des sels de nicotine
          manipulés avec de l'acide salicylique.
        </MiscBody>
      </>
    )}

    <MiscTitle>Conditionnement</MiscTitle>
    <MiscBody>
      Les e-liquides de la gamme {props.brand} sont conditionnés dans des
      flacons Chubby Gorilla en plastique polyéthylène téréphtalate (sans
      bisphénol) d’une contenance de {props.ml}ml. Le PET est souple et
      extrêmement solide de grade alimentaire avec une excellente qualité et
      durée de vie. Un écoulement parfait du liquide. Le capuchon est résistant
      et dispose d'une sécurité enfant breveté, conformément à la législation
      française.
    </MiscBody>

    <MiscTitle>Etiquette</MiscTitle>
    <MiscBody>
      Recharges d'eliquide étiquetées selon les dispositions de l'article 48 du
      règlement n°1272/2008. Contient le logo et le nom du fabriquant, le volume
      contenue, le dosage en nicotine (même si absent), le nom de la recette et
      la composition du e-liquide. Figure aussi l’adresse de la société de
      distribution et son email de contact ainsi que le numéro de lot et les
      conseil d'utilisation en français.
    </MiscBody>
  </Misc>
);
export default Miscellaneous;
