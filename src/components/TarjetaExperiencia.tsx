// src/components/TarjetaExperiencia.tsx
import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TarjetaExperienciaProps {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
  estiloPersonalizado?: ViewStyle;
}

export default function TarjetaExperiencia({ 
  cargo, 
  empresa, 
  periodo, 
  descripcion, 
  estiloPersonalizado 
}: TarjetaExperienciaProps) {
  return (
    <View style={[styles.glassCard, estiloPersonalizado]}>
      <View style={styles.headerRow}>
        <View style={styles.iconContainer}>
          <Ionicons name="briefcase-outline" size={24} color="#38bdf8" />
        </View>
        <View style={styles.periodoBadge}>
          <Text style={styles.periodoText}>{periodo}</Text>
        </View>
      </View>

      <Text style={styles.cargo}>{cargo}</Text>
      <Text style={styles.empresa}>{empresa}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  glassCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.07)', // Fondo traslúcido tipo cristal
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)', // Borde sutil iluminado
    borderRadius: 24,
    padding: 20,
    marginVertical: 10,
    // Sombra flotante para dar profundidad 3D
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    backgroundColor: 'rgba(56, 189, 248, 0.15)',
    padding: 10,
    borderRadius: 14,
  },
  periodoBadge: {
    backgroundColor: 'rgba(56, 189, 248, 0.15)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(56, 189, 248, 0.3)',
  },
  periodoText: {
    color: '#38bdf8',
    fontSize: 12,
    fontWeight: '600',
  },
  cargo: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  empresa: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 10,
  },
  descripcion: {
    color: 'rgba(255, 255, 255, 0.65)',
    fontSize: 14,
    lineHeight: 20,
  },
});