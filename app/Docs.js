import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View className='max-w-screen-md '>
      <LinearGradient  className='h-full w-screen' colors={[ '#3B0169','#8E7AA7']}
       start={{ x: 2 , y: 1 }}
       end={{ x: 1, y: 0 }}>
        <View className='bg-[#411d6c] h-28 flex flex-row'>
          <View className='flex flex-row justify-start pt-6'>
          <Image className='pr-3 h-[50] w-[40]' source={require('../assets/logo.png')} />
          <Text className='text-[#ac4ff9] pl-2 pt-2 font-bold text-xl'>Legal</Text>
          <Text className='text-[#fff] pt-2 font-bold text-xl'> Guard</Text>
          </View>
          <View className='flex flex-row justify-center ml-20 mt-8 '>
          <TouchableOpacity className=''>
            <LinearGradient className="h-10 w-32 text-sm flex flex-row justify-center items-center rounded-lg  border  " colors={['#8F27E0', '#DC6B47', '#F58400']} start={{ x: 0 , y: 3 }}
              end={{ x: 2 , y: 0 }}>
               <Text className='text-md text-[#ffffff] justify-center font-bold p-1 '>Connect Wallet</Text>
            </LinearGradient>
          </TouchableOpacity>
          </View>
        </View>
        
      </LinearGradient>
    </View>
  );
}

