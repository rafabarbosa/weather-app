import React from "react";
import { ImageBackground, ImageBackgroundProps } from "react-native";
import styles from "./style";

export default function Background({
  children,
  ...rest
}: ImageBackgroundProps) {
  return (
    <ImageBackground style={styles.container} {...rest}>
      {children}
    </ImageBackground>
  );
}
