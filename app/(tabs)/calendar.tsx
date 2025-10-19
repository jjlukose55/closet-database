import { BackButton } from '@/components/buttons'
import Calendar from '@/components/calendar'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const year = 2025;
const month = 4;
const monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const calendar = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className='flex-1 items-center justify-start p-4'>
        {/* Header */}
        <Text className='font-pro text-4xl font-bold mb-4 self-start'>Your Calendar of Clothes</Text>
        <View className='flex-1'>
          {/* Month | Year subheader */}
          <View className="flex-row w-80 p-4">
              <View className="flex-1 p-1 items-center border-x justify-center">
                  <Text className="text-4xl font-pro text-center">{monthLabels[month]}</Text>
              </View>
              <View className="flex-1 p-1 items-center border-r justify-center">
                  <Text className="text-4xl font-pro text-center">{year}</Text>
              </View>
          </View>
          {/* Calendar */}
          <Calendar year={year} month={month}/>
        </View>
        {/* Footer */}
        <View className='justify-self-end'>
          {/* Back Button */}
          <BackButton />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default calendar
