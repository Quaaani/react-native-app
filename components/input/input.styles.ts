import {StyleSheet} from 'react-native'

import {Colors, Fonts, Height, Radius} from '@/constants/tokens'

const paddingHorizontal = 26

export const styles = StyleSheet.create({
  root: {},
  input: {
    height: Height.input,
    backgroundColor: Colors.violetDark,
    borderRadius: Radius.r10,
    paddingHorizontal,
    color: Colors.gray,
    fontSize: Fonts.f18,
  },
  iconContainer: {
    position: 'absolute',
    height: '100%',
    right: paddingHorizontal,
    justifyContent: 'center',
  },
})
