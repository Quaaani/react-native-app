import {FC, useEffect, useMemo, useState} from 'react'
import {View, Text, Animated, ViewStyle, StyleProp} from 'react-native'

import {styles} from './toast.styles'

import {AnimationDuration} from '@/constants/tokens'

export interface ToastProps {
  show: boolean
  title: string
  message: string
  autoClose?: boolean
}

// TODO: Finalize appear and autoClose logic
export const Toast: FC<ToastProps> = ({show, title, message, autoClose}) => {
  // TODO: Investigate for a better approach of applying props to the local state
  const [toastIsShown, setToastIsShown] = useState(show)

  const animatedValue = useMemo(() => new Animated.Value(-100), [])

  useEffect(() => {
    setToastIsShown(show)

    if (autoClose) {
      const timerId = setTimeout(() => {
        setToastIsShown(false)
      }, 3000)

      return () => {
        clearTimeout(timerId)
      }
    }
  }, [autoClose, show])

  const onLayoutHandler = () => {
    Animated.timing(animatedValue, {
      toValue: 50,
      duration: AnimationDuration.default,
      useNativeDriver: true,
    }).start()
  }

  const toastAnimatedStyles = useMemo<StyleProp<ViewStyle>>(
    () => ({
      ...styles.root,
      transform: [
        {
          translateY: animatedValue,
        },
      ],
    }),
    [animatedValue],
  )

  if (!toastIsShown) {
    return <></>
  }

  return (
    <Animated.View
      style={toastAnimatedStyles}
      onLayout={onLayoutHandler}
    >
      <Text>{title}</Text>
      <Text>{message}</Text>
      <View>Hello</View>
    </Animated.View>
  )
}
