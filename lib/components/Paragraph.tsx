import { PropsWithChildren } from 'react'
import { Text } from 'react-native'
import { PARAGRAPH_STYLES } from '../styles/Paragraph'
import { BUTTON_STYLES } from '../styles/Button'

export type ParagraphProps = PropsWithChildren<{}>

export const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <Text style={[PARAGRAPH_STYLES.big, BUTTON_STYLES.primaryButton]}>{children}</Text>
  )
}
