import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 20,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
    buttonContent: {
      flexDirection: 'row',
      gap: 6,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    logo: {
      height: '100%',
      width: '100%',
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
    images: {
      width: 100,
      height: 100,
    },
  })

  
  export { styles }
