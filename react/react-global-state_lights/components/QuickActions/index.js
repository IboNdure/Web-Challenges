import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ toggleAllLights }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => toggleAllLights(false)} // Schaltet alle Lichter aus
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => toggleAllLights(true)} // Schaltet alle Lichter ein
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
