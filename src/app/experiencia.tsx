// src/app/experiencia.tsx
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TarjetaExperiencia from '../components/TarjetaExperiencia';
export default function ExperienciaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="light" />
      
      {/* Título de la sección */}
      <View style={styles.header}>
        <Text style={styles.title}>Experiencia y Proyectos</Text>
        <Text style={styles.subtitle}>Desarrollo de software y proyectos técnicos</Text>
      </View>

      {/* Tarjeta de Proyecto / Experiencia 1 */}
      <TarjetaExperiencia 
        cargo="Desarrollador Full Stack & Documentador"
        empresa="Proyecto Integrador ADSO / IERD"
        periodo="2025 - Presente"
        descripcion="Diseño y desarrollo de arquitectura de software, modelado de bases de datos relacionales, control de versiones con Git y documentación técnica bajo estrictos estándares de calidad."
      />

      {/* Tarjeta de Proyecto / Experiencia 2 */}
      <TarjetaExperiencia 
        cargo="Creador de Herramientas de Modding"
        empresa="Proyectos Independientes (Geode / C++ / TS)"
        periodo="2026"
        descripcion="Desarrollo de asistencias y scripts interactivos personalizados, optimización de flujos de trabajo locales y gestión de entornos de desarrollo con Docker."
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