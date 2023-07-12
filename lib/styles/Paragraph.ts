import { StyleSheet } from 'react-native'

import { FONT_FAMILY_SEMIBOLD } from './colors.js'

export const PARAGRAPH_STYLES = StyleSheet.create({
  big: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
});
