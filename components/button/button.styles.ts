import {StyleSheet} from 'react-native'

import {Colors, Fonts, Height, Radius} from '@/constants/tokens'

export const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.primary,
    borderRadius: Radius.r10,
    height: Height.input,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.white,
    fontSize: Fonts.f18,
  },
})
