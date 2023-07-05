import { Pressable } from 'react-native-web'

export interface ButtonProps {
  onClick: VoidFunction
}

export function Button({ onClick }: ButtonProps) {
  return (
    <Pressable onPress={onClick} />
  )
}
