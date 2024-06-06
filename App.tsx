import React, {useEffect} from 'react'
import {Button, SafeAreaView, Text} from 'react-native'
import useCommonStore from './src/store/common.ts'
import {useTranslation} from 'react-i18next'

function App(): React.JSX.Element {
  const {lng, setLanguage} = useCommonStore()
  const {i18n} = useTranslation()

  useEffect(() => {
    if (lng) {
      i18n.changeLanguage(lng)
    }
  }, [lng])

  return (
    <SafeAreaView>
      <Text>{i18n.t('intro')}</Text>
      <Button onPress={() => setLanguage('ko')} title="눌러보시오" />
    </SafeAreaView>
  )
}

export default App
