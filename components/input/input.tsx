import {FC, useState} from 'react'
import {Pressable, TextInput, TextInputProps, View} from 'react-native'

import {styles} from './input.styles'

import EyeClosedIcon from '@/assets/icons/eye-closed.svg'
import EyeIcon from '@/assets/icons/eye.svg'
import {Colors} from '@/constants/tokens'

export interface InputProps extends TextInputProps {
  isPassword?: boolean
}

export const Input: FC<InputProps> = ({isPassword, ...restProps}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const PasswordIcon = isPasswordVisible ? EyeIcon : EyeClosedIcon

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        placeholderTextColor={Colors.gray}
        secureTextEntry={isPassword && !isPasswordVisible}
        {...restProps}
      />
      <Pressable
        style={styles.iconContainer}
        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
      >
        {isPassword ? <PasswordIcon /> : undefined}
      </Pressable>
    </View>
  )
}
