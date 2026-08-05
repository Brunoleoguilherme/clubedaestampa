import { View, Text, StyleSheet } from 'react-native'
import { colors, formatBRL } from '@clubedaestampa/ui'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Marca "adesivo": bloco com as tres faixas da marca */}
      <View style={styles.badge}>
        <View style={[styles.stripe, { backgroundColor: colors.pink[500] }]} />
        <View style={[styles.stripe, { backgroundColor: colors.blue[500] }]} />
        <View style={[styles.stripe, { backgroundColor: colors.yellow[500] }]} />
      </View>
      <Text style={styles.brand}>CLUBE DA ESTAMPA</Text>
      <Text style={styles.subtitle}>Aplicativo do cliente — em construção.</Text>
      <Text style={styles.hint}>Tokens compartilhados: {formatBRL(49900)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.paper,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  badge: {
    flexDirection: 'row',
    width: 96,
    height: 96,
    borderRadius: 22,
    borderWidth: 4,
    borderColor: colors.ink,
    overflow: 'hidden',
    marginBottom: 22,
  },
  stripe: { flex: 1 },
  brand: { color: colors.night[900], fontSize: 26, fontWeight: '900', textAlign: 'center', letterSpacing: 0.5 },
  subtitle: { color: colors.night[500], fontSize: 15, marginTop: 10, textAlign: 'center' },
  hint: { color: colors.night[400], fontSize: 13, marginTop: 24 },
})
