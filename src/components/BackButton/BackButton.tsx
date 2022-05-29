import { useNavigate } from "react-router-dom";
import { Back } from "../../assets/icons";
import { BackButtonContainer } from "./styles";

export const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <BackButtonContainer onClick={handleBack}>
      <Back />
    </BackButtonContainer>
  );
};
