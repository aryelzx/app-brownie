import { Image, View } from 'react-native'

import { Collapsible } from '@/components/Collapsible'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { useBrowniesContext } from '@/context/brownies'
import { styles } from '@/styles/main'
import { useEffect, useState } from 'react'

export default function TabTwoScreen() {
  const { brownies } = useBrowniesContext()
  const [amount, setAmount] = useState<number>(0)

  function handleCalculateTotal() {
    const total = brownies.value.chocolate + brownies.value.ninho
    setAmount(total * 5)
  }

  useEffect(() => {
    handleCalculateTotal()
  }, [brownies.value])

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/carteira.jpg')}
          style={styles.logo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Gestão de carteira</ThemedText>
      </ThemedView>
      <ThemedText>Contabilidade do estoque com base nos sabores.</ThemedText>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Collapsible title="Chocolate">
          <View style={{ flexDirection: 'column' }}>
            <ThemedText type="default">
              Vendidos: {brownies.value.chocolate}
            </ThemedText>
            <ThemedText type="default">Total: R${brownies.value.chocolate * 5}</ThemedText>
          </View>
        </Collapsible>
        <Image
          source={require('@/assets/images/chocolate.png')}
          style={styles.images}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Collapsible title="Ninho">
          <View style={{ flexDirection: 'column' }}>
            <ThemedText type="default">
              Vendidos: {brownies.value.ninho}
            </ThemedText>
            <ThemedText type="default">Total: R${brownies.value.ninho * 5}</ThemedText>
          </View>
        </Collapsible>
        <Image
          source={require('@/assets/images/ninho.avif')}
          style={styles.images}
        />
      </View>
      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          marginTop: 55,
          gap: 5,
        }}
      >
        <ThemedText type="defaultSemiBold">
          Total vendidos{' '}
          <ThemedText
            type="default"
            style={{ color: 'gray' }}
          >
            {brownies.value.total}
          </ThemedText>
        </ThemedText>
        <ThemedText type="subtitle">
          Receita total{' '}
          <ThemedText
            type="subtitle"
            style={{ color: 'green' }}
          >
            R${amount}
          </ThemedText>
        </ThemedText>
      </View>
    </ParallaxScrollView>
  )
}
