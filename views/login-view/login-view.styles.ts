import {StyleSheet} from 'react-native'

import {Colors, Gaps, Height, Radius} from '@/constants/tokens'

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    paddingHorizontal: 55,
  },
  content: {
    alignItems: 'center',
  },
  header: {
    color: 'white',
  },
  form: {
    alignSelf: 'stretch',
    gap: Gaps.g16,
    marginVertical: 50,
  },
  input: {
    height: Height.input,
    backgroundColor: Colors.violetDark,
    borderRadius: Radius.r10,
  },
  btn: {
    backgroundColor: Colors.primary,
  },
  footer: {
    backgroundColor: Colors.primary,
  },
  logo: {
    width: 220,
  },
})
