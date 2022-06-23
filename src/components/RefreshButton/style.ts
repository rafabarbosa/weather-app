import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Icon = styled(MaterialCommunityIcons).attrs({
  name: "refresh",
  size: 70,
  color: "#fff",
})``;

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 5px solid #fff;
  justify-content: center;
  align-items: center;
`;
