interface LimitationCardProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

const LimitationCard = ({ icon, title, children }: LimitationCardProps) => {
  return (
    <div>
      <div>
        <img src={icon} alt={`icon for ${title}`} />
        <h3>{title}</h3>
      </div>

      {children}
    </div>
  );
};

export default LimitationCard;
