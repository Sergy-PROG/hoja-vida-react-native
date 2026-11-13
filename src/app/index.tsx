// src/app/index.tsx
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MiBoton from '../components/MiBoton';

export default function PerfilScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="light" />
      
      {/* Header con estilo Liquid Glass */}
      <View style={styles.glassHeader}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>SR</Text>
        </View>
        <Text style={styles.nombre}>Sergio Alejandro Cárdenas</Text>
        <Text style={styles.rol}>Desarrollador Software ADSO</Text>
        <Text style={styles.senaBadge}>SENA - Tecnólogo en ADSO</Text>
      </View>

      {/* Sección de Biografía / Resumen */}
      <View style={styles.glassCard}>
        <Text style={styles.sectionTitle}>Acerca de mí</Text>
        <Text style={styles.descripcion}>
          Estudiante de Análisis y Desarrollo de Software (ADSO) en el SENA. Apasionado por la ingeniería de software, bases de datos y la creación de interfaces modernas con React Native y TypeScript aplicando un diseño de vidrio líquido.
        </Text>
      </View>

      {/* Botones de acción */}
      <View style={styles.buttonContainer}>
        <MiBoton 
          titulo="Contactar por Email" 
          icono="mail-outline" 
          onPress={() => alert('¡Pronto habilitaremos el contacto directo!')} 
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#090d16', // Fondo oscuro espacial
    padding: 20,
    paddingTop: 60,
    paddingBottom: 100, // Espacio para la barra de navegación inferior
  },
  glassHeader: {
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(56, 189, 248, 0.2)',
    borderWidth: 2,
    borderColor: '#38bdf8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    color: '#38bdf8',
    fontSize: 24,
    fontWeight: 'bold',
  },
  nombre: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 4,
  },
  rol: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  senaBadge: {
    backgroundColor: 'rgba(147, 51, 234, 0.25)',
    color: '#d8b4fe',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
    overflow: 'hidden',
    fontSize: 12,
    fontWeight: '600',
    borderWidth: 1,
    borderColor: 'rgba(216, 180, 254, 0.3)',
  },
  glassCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  descripcion: {
    color: 'rgba(255, 255, 255, 0.65)',
    fontSize: 14,
    lineHeight: 22,
  },
  buttonContainer: {
    marginTop: 10,
  },
});