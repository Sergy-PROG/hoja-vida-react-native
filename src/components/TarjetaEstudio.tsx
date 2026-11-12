// src/components/TarjetaEstudio.tsx
import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TarjetaEstudioProps {
  titulo: string;
  institucion: string;
  periodo: string;
  estado?: string;
  estiloPersonalizado?: ViewStyle;
}

export default function TarjetaEstudio({ 
  titulo, 
  institucion, 
  periodo, 
  estado = "En Curso", 
  estiloPersonalizado 
}: TarjetaEstudioProps) {
  return (
    <View style={[styles.glassCard, estiloPersonalizado]}>
      <View style={styles.headerRow}>
        <View style={styles.iconContainer}>
          <Ionicons name="school-outline" size={24} color="#a855f7" />
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{estado}</Text>
        </View>
      </View>

      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.institucion}>{institucion}</Text>
      
      <View style={styles.footerRow}>
        <Ionicons name="calendar-outline" size={14} color="rgba(255, 255, 255, 0.6)" />
        <Text style={styles.periodo}>{periodo}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  glassCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.07)', // Efecto cristal translúcido
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)', // Borde sutil iluminado
    borderRadius: 24,
    padding: 20,
    marginVertical: 10,
    // Sombra flotante para dar profundidad estilo Glassmorphism
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
    backgroundColor: 'rgba(168, 85, 247, 0.15)',
    padding: 10,
    borderRadius: 14,
  },
  badge: {
    backgroundColor: 'rgba(147, 51, 234, 0.85)', // Morado vibrante exigido por el SENA
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(216, 180, 254, 0.4)',
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  titulo: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  institucion: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 12,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  periodo: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 13,
    marginLeft: 6,
    fontWeight: '500',
  },
});