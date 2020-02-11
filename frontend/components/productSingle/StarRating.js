import styled from 'styled-components';

const DarkIcons = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
  &::before {
    content: '\f005 \f005 \f005 \f005 \f005';
    font-family: 'Font Awesome 5 Free';
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    font-weight: 400;
    font-size: 1.6rem;
    color: #ccc;
  }
`;

const ColorIcons = styled.div`
  width: 0%;
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  &::before {
    content: '\f005 \f005 \f005 \f005 \f005';
    font-family: 'Font Awesome 5 Free';
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    font-weight: 900;
    font-size: 1.6rem;
    color: ${props => props.theme.orange};
  }
`;

const StarRating = props => {
  const thesum = `${props.rating}`;
  const totalStars = 5;
  const starPercentage = (thesum / totalStars) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

  return (
    <DarkIcons>
      <ColorIcons
        css={`
          width: ${starPercentageRounded};
        `}
      />
    </DarkIcons>
  );
};
export default StarRating;
