import { StyledBackButton } from "./styles";
import back from "../../assets/svg/back.svg";

interface IProps {
  onClick: () => void;
}

export const BackButton = ({ onClick }: IProps) => {
  return <StyledBackButton onClick={onClick} src={back} alt="back" />;
};
