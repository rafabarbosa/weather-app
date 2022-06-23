import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./style";

export default function RefreshButton({ onPress }: TouchableOpacityProps) {
  return (
    <Container onPress={onPress}>
      <Icon />
    </Container>
  );
}
