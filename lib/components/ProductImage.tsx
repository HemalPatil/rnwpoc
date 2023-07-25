import { Image, StyleSheet } from "react-native";

import { COLORS } from "../styles/colors.js";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
    container: {
        borderWidth: 1,
        borderColor: COLORS.neutral10,
    },
});

export type ProductImageProps = {
  imageUrl: string;
  height: number;
  padding?: number;
  width: number;
};

export function ProductImage({ imageUrl, height, padding, width }: ProductImageProps) {
	return (
		<Image source={{ uri:imageUrl }} style={[styles.image, { height, width, padding }]} />
	)
}
