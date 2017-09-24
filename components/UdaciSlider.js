import React from 'react'
import { View, Text, Slider } from 'react-native'

export default function UdaciSlider ({ step, value, onChange, max, unit }) {
  return (
    <View>
      <Slider
        value={value}
        onValueChange={onChange}
        maximumValue={max}
        miniumValue={0}
        step={step}
      />
      <Text>{value}</Text>
      <Text>{unit}</Text>
    </View>
  )
}
