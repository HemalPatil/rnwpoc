declare module 'react-native-web' {
  interface PressableProps {
    children?: ReactNode
    onPress?: VoidFunction
  }
  function Pressable(props: PressableProps): JSX.Element

  interface TextProps {
    children?: ReactNode
  }
  function Text(props: TextProps): JSX.Element
}
