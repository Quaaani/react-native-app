import React from 'react'

import {useColorScheme} from '@/hooks/useColorScheme'
import {Text, View} from 'react-native'

export const a = 5

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <View>
      <Text>Layout</Text>
    </View>
  )
}
