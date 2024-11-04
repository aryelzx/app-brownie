import { Button, Image, View } from 'react-native'

import { HelloWave } from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Brownies, useBrowniesContext } from '@/context/brownies'
import { styles } from '@/styles/main'

export default function HomeScreen() {
  const { brownies } = useBrowniesContext()

  function handleIncrementOneInTotal(entity: keyof Brownies) {
    brownies.set((prev) => ({
      ...prev,
      [entity]: prev[entity] + 1,
      total: prev.total + 1,
    }))
  }

  function handleDecrementOneInTotal(entity: keyof Brownies) {
    if (brownies.value[entity] < 1) return
    brownies.set((prev) => ({
      ...prev,
      [entity]: prev[entity] - 1,
      total: prev.total - 1,
    }))
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/ilustracaoBrownie.avif')}
          style={styles.logo}
        />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Bem vindo(a)!</ThemedText>
          <HelloWave />
        </ThemedView>
        <ThemedView style={styles.content}>
          <View style={styles.titleContainer}>
            <ThemedText type="subtitle">Total vendidos:</ThemedText>
            <ThemedText type="defaultSemiBold">
              {brownies.value.total}
            </ThemedText>
          </View>
        </ThemedView>
        <ThemedView style={styles.content}>
          <Image
            source={require('@/assets/images/chocolate.png')}
            style={styles.images}
          />
          <View style={styles.titleContainer}>
            <ThemedText type="defaultSemiBold">Chocolate:</ThemedText>
            <ThemedText type="defaultSemiBold">
              {brownies.value.chocolate}
            </ThemedText>
          </View>
          <View style={styles.buttonContent}>
            <View
              style={{
                backgroundColor: '#F3F3F3',
                borderRadius: 25,
                width: 40,
                height: 40,
              }}
            >
              <Button
                onPress={() => handleDecrementOneInTotal('chocolate')}
                title="-"
                color={'#C0C0C0'}
              />
            </View>
            <View
              style={{
                backgroundColor: 'green',
                borderRadius: 25,
                width: 40,
                height: 40,
              }}
            >
              <Button
                onPress={() => handleIncrementOneInTotal('chocolate')}
                title="+"
                color={'#F0F0F0'}
              />
            </View>
          </View>
        </ThemedView>
        <ThemedView style={styles.content}>
          <Image
            source={require('@/assets/images/ninho.avif')}
            style={styles.images}
          />
          <View style={styles.titleContainer}>
            <ThemedText type="defaultSemiBold">Ninho:</ThemedText>
            <ThemedText type="defaultSemiBold">
              {brownies.value.ninho}
            </ThemedText>
          </View>
          <View style={styles.buttonContent}>
            <View
              style={{
                backgroundColor: '#F3F3F3',
                borderRadius: 25,
                width: 40,
                height: 40,
              }}
            >
              <Button
                onPress={() => handleDecrementOneInTotal('ninho')}
                title="-"
                color={'#C0C0C0'}
              />
            </View>
            <View
              style={{
                backgroundColor: 'green',
                borderRadius: 25,
                width: 40,
                height: 40,
              }}
            >
              <Button
                onPress={() => handleIncrementOneInTotal('ninho')}
                title="+"
                color={'#F0F0F0'}
              />
            </View>
          </View>
        </ThemedView>
        <ThemedText type="defaultSemiBold">Preços:</ThemedText>
        <ThemedView style={styles.content}>
          <Image
            source={require('@/assets/images/chocolatePreco.webp')}
            style={styles.images}
          />
          <ThemedText type="subtitle">R$5,00</ThemedText>
        </ThemedView>
        <ThemedView style={styles.content}>
          <Image
            source={require('@/assets/images/ninhoPreco.avif')}
            style={styles.images}
          />
          <ThemedText type="subtitle">R$5,00</ThemedText>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  )
}
