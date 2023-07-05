import { Pressable, Text } from 'react-native-web'

export interface ButtonProps {
  label: string
  onClick: VoidFunction
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <Pressable onPress={onClick}>
      <Text>{label}</Text>
    </Pressable>
  )
}
