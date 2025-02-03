import {StyleSheet} from 'react-native'

import {Colors, Fonts, Radius} from '@/constants/tokens'

export const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    width: '100%',
    height: 60,
    backgroundColor: Colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Radius.r10,
    paddingHorizontal: 100,
  },
  text: {
    fontSize: Fonts.f16,
    color: Colors.white,
    textAlign: 'center',
  },
})
