import { SmallHeading } from '../../styles/Utils.styled';
import Styled from './LimitationCard.styled';

interface LimitationCardProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

const LimitationCard = ({ icon, title, children }: LimitationCardProps) => {
  return (
    <Styled.LimitationCard>
      <Styled.Title>
        <img src={icon} alt={`icon for ${title}`} />
        <SmallHeading>{title}</SmallHeading>
      </Styled.Title>

      {children}
    </Styled.LimitationCard>
  );
};

export default LimitationCard;
