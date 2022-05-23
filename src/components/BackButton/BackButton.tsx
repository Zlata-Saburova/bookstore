import { Back } from "../../assets/icons";
import { BackButtonContainer } from "./styles";

interface IProps {
  onClick: () => void;
}

export const BackButton = ({ onClick }: IProps) => {
  return (
    <BackButtonContainer onClick={onClick}>
      <Back />
    </BackButtonContainer>
  );
};
