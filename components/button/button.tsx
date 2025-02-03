import {FC, useMemo} from 'react'
import {
  Animated,
  GestureResponderEvent,
  Pressable,
  PressableProps,
  Text,
} from 'react-native'

import {styles} from './button.styles'

import {AnimationDuration, Colors} from '@/constants/tokens'

export interface ButtonProps extends PressableProps {
  label: string
}

export const Button: FC<ButtonProps> = ({label, ...restProps}) => {
  const animatedValue = new Animated.Value(100)
  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.primary, Colors.primaryHover],
  })

  const onPressInHandler = (event: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: AnimationDuration.default,
      useNativeDriver: true,
    }).start()

    restProps.onPressIn?.(event)
  }

  const onPressOutHandler = (event: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: AnimationDuration.default,
      useNativeDriver: true,
    }).start()

    restProps.onPressOut?.(event)
  }

  // TODO: Create UTIL func for conditional object properties
  const buttonAnimatedStyles = useMemo(
    () => ({
      ...styles.root,
      backgroundColor,
    }),
    [backgroundColor],
  )

  return (
    <Pressable
      {...restProps}
      onPressIn={onPressInHandler}
      onPressOut={onPressOutHandler}
    >
      <Animated.View style={buttonAnimatedStyles}>
        <Text style={styles.text}>{label}</Text>
      </Animated.View>
    </Pressable>
  )
}
