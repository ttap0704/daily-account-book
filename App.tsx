import 'intl-pluralrules'
import 'utils/i18n.ts'
import React, {useEffect} from 'react'
import {Button, SafeAreaView, Text} from 'react-native'
import {useTranslation} from 'react-i18next'
import useCommonStore from 'store/common.ts'

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
      <Button onPress={() => setLanguage('en')} title="눌러보시오" />
    </SafeAreaView>
  )
}

export default App
