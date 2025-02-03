import {useState} from 'react'
import {Image, Text, View} from 'react-native'

import {styles} from './login-view.styles'

import {Button} from '@/components/button'
import {Input} from '@/components/input'
import {Toast} from '@/components/toast'

export const LoginView = () => {
  const [errorIsShown, setErrorIsShown] = useState(false)

  return (
    <>
      <View style={styles.root}>
        <View style={styles.content}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
            resizeMode="contain"
          />
          <View style={styles.form}>
            <Input placeholder="Email" />
            <Input
              isPassword
              placeholder="Пароль"
            />
            <Button
              label="Войти"
              onPress={() => setErrorIsShown(true)}
            />
          </View>
          <Text style={styles.header}>Восстановить пароль</Text>
        </View>
      </View>
      <Toast
        autoClose
        title="Title"
        message="Incorrect data"
        show={errorIsShown}
      />
    </>
  )
}
