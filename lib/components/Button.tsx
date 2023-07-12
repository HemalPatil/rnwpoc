import { Pressable, Text } from 'react-native'

import { BUTTON_STYLES } from '../styles/Button'

export type ButtonProps = {
  label: string
  onClick: VoidFunction
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <Pressable onPress={onClick} style={BUTTON_STYLES.primaryButton}>
      <Text>{label}</Text>
    </Pressable>
  )
}
