// src/components/TarjetaHobby.tsx
import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TarjetaHobbyProps {
  titulo: string;
  descripcion: string;
  icono?: keyof typeof Ionicons.glyphMap;
  estiloPersonalizado?: ViewStyle;
}

export default function TarjetaHobby({ 
  titulo, 
  descripcion, 
  icono = "game-controller-outline", 
  estiloPersonalizado 
}: TarjetaHobbyProps) {
  return (
    <View style={[styles.glassCard, estiloPersonalizado]}>
      <View style={styles.headerRow}>
        <View style={styles.iconContainer}>
          <Ionicons name={icono} size={22} color="#ec4899" />
        </View>
      </View>

      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  glassCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.07)', // Fondo traslúcido cristalino
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)', // Borde brillante de cristal
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
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    backgroundColor: 'rgba(236, 72, 153, 0.15)',
    padding: 10,
    borderRadius: 14,
  },
  titulo: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  descripcion: {
    color: 'rgba(255, 255, 255, 0.65)',
    fontSize: 14,
    lineHeight: 20,
  },
});