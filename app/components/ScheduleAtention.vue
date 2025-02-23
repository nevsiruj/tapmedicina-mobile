<template>
  <Page class="page">
    <!-- Barra de acción -->
    <ActionBar title="Atención Programada" class="action-bar" />

    <StackLayout class="container">
      <Label text="Programa tu Cita Médica" class="title" />

      <!-- Sección para seleccionar fecha y hora -->
      <StackLayout class="date-time-picker-container">
        <Label text="Seleccione una fecha:" class="label" />
        <DatePicker v-model="selectedDate" class="date-picker" />

        <Label text="Seleccione una hora:" class="label" />
        <TimePicker v-model="selectedTime" class="time-picker" />
      </StackLayout>

      <!-- Botón para agendar -->
      <Button
        text="Agendar Cita"
        class="button primary"
        @tap="scheduleAppointment"
      />
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';

export default Vue.extend({
  name: 'ScheduledCare',
  data() {
    return {
      selectedDate: new Date(),
      selectedTime: new Date(),
    };
  },
  methods: {
    scheduleAppointment() {
      console.log(
        'Agendando cita con fecha: ' + this.selectedDate + ' y hora: ' + this.selectedTime
      );
      // Aquí podrías mostrar un diálogo, navegar a otra pantalla o llamar a una API
    },
  },
});
</script>

<!-- IMPORTANTE: Quita el atributo "scoped" si el fondo no se aplica correctamente -->
<style>
/* Fondo con degradado para toda la página */
.page {
  background: linear-gradient(135deg, #062B3F, #0F3A4D) !important;
  width: 100%;
  height: 100%;
}

/* Barra de acción */
.action-bar {
  background-color: #0F3A4D !important;
  color: #ffffff !important;
  font-size: 20px;
  text-align: center;
}

/* Contenedor principal */
.container {
  width: 100%;
  max-width: 360px;
  background: linear-gradient(135deg, #0F3A4D, #2B2B40);
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  margin: 30px auto;
  padding: 30px;
  align-items: center;
}

/* Título principal: tono pastel */
.title {
  color: #c7e49c; /* Verde pastel */
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

/* Contenedor para los pickers */
.date-time-picker-container {
  width: 100%;
  margin-bottom: 20px;
}

/* Etiquetas descriptivas: verde brillante */
.label {
  color: #17B978; 
  font-size: 16px;
  margin-bottom: 4px;
  font-weight: 600;
}

/* Estilos para DatePicker y TimePicker */
.date-picker,
.time-picker {
  background-color: #2B2B40;
  color: #ffffff;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;
}

/* Botón primario */
.button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  text-align: center;
  border: none;
  margin-bottom: 10px;
}
.primary {
  background-color: #17B978;
  color: #062B3F;
}
</style>
