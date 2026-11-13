// src/app/estudios.tsx
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TarjetaEstudio from '../components/TarjetaEstudio';

export default function EstudiosScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="light" />
      
      {/* Título de la sección */}
      <View style={styles.header}>
        <Text style={styles.title}>Formación Académica</Text>
        <Text style={styles.subtitle}>Mi trayectoria educativa y técnica en el SENA</Text>
      </View>

      {/* Tarjeta de Estudios Principal (SENA ADSO) */}
      <TarjetaEstudio 
        titulo="Tecnólogo en Análisis y Desarrollo de Software (ADSO)"
        institucion="SENA"
        periodo="2025 - Presente"
        estado="En Curso"
      />

      {/* Tarjeta de Estudios Complementarios */}
      <TarjetaEstudio 
        titulo="Fundamentos de Bases de Datos y SQL"
        institucion="Certificación Técnica / Autodidacta"
        periodo="2024 - 2025"
        estado="Completado"
      />
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
  header: {
    marginBottom: 20,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 14,
  },
});