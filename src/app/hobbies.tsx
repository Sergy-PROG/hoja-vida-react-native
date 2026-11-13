// src/app/hobbies.tsx
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TarjetaHobby from '../components/TarjetaHobby';

export default function HobbiesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="light" />
      
      {/* Título de la sección */}
      <View style={styles.header}>
        <Text style={styles.title}>Pasatiempos e Intereses</Text>
        <Text style={styles.subtitle}>Actividades, pasiones y proyectos personales</Text>
      </View>

      {/* Tarjeta Hobby 1 */}
      <TarjetaHobby 
        titulo="Hardware y PC Custom Building"
        descripcion="Investigación de compatibilidad de componentes, optimización de sistemas, gestión térmica avanzada y configuraciones de hardware a medida."
        icono="hardware-chip-outline"
      />

      {/* Tarjeta Hobby 2 */}
      <TarjetaHobby 
        titulo="Producción Musical y Lo-Fi"
        descripcion="Composición y producción de pistas musicales experimentales y texturas sonoras, fusionando estilos alternativos e indie."
        icono="musical-notes-outline"
      />

      {/* Tarjeta Hobby 3 */}
      <TarjetaHobby 
        titulo="Videojuegos y Mecánicas"
        descripcion="Exploración de mecánicas de juego en títulos de ritmo y shooters tácticos, analizando configuraciones y rendimiento de software."
        icono="game-controller-outline"
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