import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ name, isOn, onToggle }) {
  return (
    <LightButton
      type="button"
      onClick={onToggle} // Direkt den onToggle-Handler verwenden
      $isOn={isOn} // Zustand über Prop isOn
    >
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
