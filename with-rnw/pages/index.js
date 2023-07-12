// import { Button, Paragraph } from 'rnwpoc-lib'
import { Pressable, Text } from 'react-native'
import { PARAGRAPH_STYLES } from '../styles/Paragraph'
import { BUTTON_STYLES } from '../styles/Button'

const HomePage = () => {
  return (
    <>
      <div>rnwpoc-web-y</div>
      <Pressable onPress={() => {
          console.log('hello from react-native-web')
        }} style={BUTTON_STYLES.primaryButton}>
        <Text>This is an RNW button</Text>
      </Pressable>
      {/* <Button
        label="This is an RNW button"
        onClick={() => {
          console.log('hello from react-native-web')
        }}
      /> */}
      <Text style={[PARAGRAPH_STYLES.big, BUTTON_STYLES.primaryButton]}>This is a Paragraph</Text>
      {/* <Paragraph>This is a Paragraph</Paragraph> */}
      <button
        onClick={() => {
          console.log('hello from html5')
        }}
      >
        This is an HTML5 button
      </button>
    </>
  )
}

export default HomePage
