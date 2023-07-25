import { Pressable, StyleSheet, Text, View } from "react-native";

import { COMMON_STYLES } from "../styles/common.js";
import { COLORS } from "../styles/colors.js";
import { PARAGRAPH_STYLES } from "../styles/Paragraph.js";
import { CAPTION_STYLES } from "../styles/Caption.js";
import { ProductImage } from "./ProductImage.js";

export type ProductCardProps = {
  discount?: number;
  imageUrl: string;
  name: string;
  price: number;
  variantId: number;
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingTop: 12,
    backgroundColor: COLORS.white,
  },
  productNameText: {
    marginVertical: 4,
    color: COLORS.neutral90,
  },
  priceText: {
    color: COLORS.neutral80,
  },
  strikeText: {
    textDecorationLine: "line-through",
    color: COLORS.neutral50,
    marginHorizontal: 4,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export function ProductCard({
  discount = 0,
  imageUrl,
  name,
  price,
  variantId,
}: ProductCardProps) {
  return (
    <Pressable style={[styles.container, COMMON_STYLES.row]}>
      <ProductImage imageUrl={imageUrl} height={80} padding={8} width={80} />
      <View style={[styles.textContainer]}>
        <Text style={[styles.productNameText, PARAGRAPH_STYLES.MediumT1]}>
          {name}
        </Text>
        <View style={[COMMON_STYLES.row, COMMON_STYLES.alignItemsCenter]}>
          <Text style={[PARAGRAPH_STYLES.MediumT1, styles.priceText]}>
            {price - discount}
          </Text>
          {discount ? (
            <Text style={[CAPTION_STYLES.MEDIUM_C1, styles.strikeText]}>
              {price}
            </Text>
          ) : null}
        </View>
      </View>
    </Pressable>
  );
}
