// src/components/MiBoton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MiBotonProps {
  titulo: string;
  onPress: () => void;
  icono?: keyof typeof Ionicons.glyphMap;
  estiloPersonalizado?: ViewStyle;
  estiloTexto?: TextStyle;
}

export default function MiBoton({ titulo, onPress, icono, estiloPersonalizado, estiloTexto }: MiBotonProps) {
  return (
    <TouchableOpacity 
      style={[styles.glassButton, estiloPersonalizado]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      {icono && <Ionicons name={icono} size={20} color="#fff" style={styles.icon} />}
      <Text style={[styles.buttonText, estiloTexto]}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  glassButton: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Efecto translúcido base
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)', // Borde brillante de cristal
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // Sombra suave para dar profundidad 3D
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});