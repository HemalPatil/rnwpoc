import { StyleSheet } from "react-native";

import { FONT_FAMILY_MEDIUM, FONT_FAMILY_SEMIBOLD } from "./colors.js";

export const PARAGRAPH_STYLES = StyleSheet.create({
  big: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
  MediumT1: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FONT_FAMILY_MEDIUM,
  },
});
