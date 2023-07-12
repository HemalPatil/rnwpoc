import { PropsWithChildren } from 'react'
import { Text } from 'react-native'
import { PARAGRAPH_STYLES } from '../styles/Paragraph.js'
import { BUTTON_STYLES } from '../styles/Button.js'

export type ParagraphProps = PropsWithChildren<{}>

export const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <Text style={[PARAGRAPH_STYLES.big, BUTTON_STYLES.primaryButton]}>{children}</Text>
  )
}
