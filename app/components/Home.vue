<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label text="T.A.P" class="title" />
    </ActionBar>

    <StackLayout class="container">
      <!-- Inicio de Sesión -->
      <StackLayout v-if="!isLoggedIn" class="login-container">
        <TextField v-model="username" hint="Usuario" class="input" />
        <TextField
          v-model="password"
          hint="Contraseña"
          secure="true"
          class="input"
        />
        <Button text="Iniciar Sesión" @tap="login" class="button primary" />
      </StackLayout>

      <!-- Opciones después de iniciar sesión -->
      <StackLayout v-else class="profile-container">
        <Label :text="'Bienvenido, ' + username" class="welcome-text" />
        <Label text="¿Qué deseas hacer hoy?" class="subtitle-text" />
        
        <!-- Opciones en columna -->
        <StackLayout class="options-stack">
          <Button text="Ver Perfil" @tap="goToProfile" class="option-button" />
          <Button
            text="Historial Médico"
            @tap="goToMedicalHistory"
            class="option-button"
          />
          <Button
            text="Atención Inmediata"
            @tap="requestImmediateCare"
            class="option-button"
          />
          <Button
            text="Atención Programada"
            @tap="scheduleAppointment"
            class="option-button"
          />
          <Button
            text="Notificaciones"
            @tap="viewNotifications"
            class="option-button"
          />
          <Button
            text="Cerrar Sesión"
            @tap="logout"
            class="option-button danger"
          />
        </StackLayout>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import MedicalHistory from './MedicalHistory.vue'; // <-- Importa el componente
import ScheduleAtention from './ScheduleAtention.vue'; // <-- Importa el componente

export default Vue.extend({
  data() {
    return {
      username: '',
      password: '',
      isLoggedIn: false,
    };
  },
  methods: {
    login() {
      if (this.username && this.password) {
        this.isLoggedIn = true;
      }
    },
    logout() {
      this.isLoggedIn = false;
      this.username = '';
      this.password = '';
    },
    goToProfile() {
      console.log('Navegando al perfil de usuario');
    },
    goToMedicalHistory() {
      console.log('Accediendo al historial médico');
            this.$navigateTo(MedicalHistory);

    },
    requestImmediateCare() {
      console.log('Solicitando atención inmediata');
    },
    scheduleAppointment() {
      console.log('Agendando una cita médica');
                  this.$navigateTo(ScheduleAtention);

    },
    viewNotifications() {
      console.log('Mostrando notificaciones');
    },
  },
});
</script>

<!-- IMPORTANTE: Sin "scoped" para que el estilo afecte a todo el Page -->
<style>
/* Fondo oscuro forzado con !important y 100% de ancho/alto */
.page {
  background-color: #062B3F !important;
  width: 100%;
  height: 100%;
}

/* Barra de acción en un tono oscuro */
.action-bar {
  background-color: #0F3A4D !important;
}
.title {
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
}

/* Contenedor principal */
.container {
  padding: 20px;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* --- Pantalla de Login --- */
.login-container {
  width: 100%;
  max-width: 320px;
  padding: 25px;
  background-color: #0F3A4D;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  align-items: center;
}
.input {
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: none;
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  margin-bottom: 15px;
}
.button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 6px;
  text-align: center;
  margin-bottom: 15px;
  border: none;
}
.primary {
  background-color: #17B978 !important;
  color: #ffffff !important;
}

/* --- Pantalla Post-Login --- */
.profile-container {
  width: 100%;
  max-width: 360px;
  padding: 30px;
  background-color: #0F3A4D;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  align-items: center;
  margin-top: 20px;
}
.welcome-text {
  font-size: 24px;
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 8px;
  text-align: center;
}
.subtitle-text {
  color: #c1c1c1;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
}

/* Opciones en columna */
.options-stack {
  width: 100%;
}

/* Botones de opciones con degradado desde verde (#17B978) a #c7e49c */
.option-button {
  background: linear-gradient(90deg, #17B978 0%, #c7e49c 100%) !important;
  color: #062B3F !important;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  margin-bottom: 12px;
  padding: 14px;
  text-align: center;
  transition: opacity 0.3s, transform 0.2s;
  border: none;
}
.option-button:active {
  opacity: 0.9;
  transform: scale(0.98);
}

/* Botón de cerrar sesión */
.danger {
  background: #EB5757 !important;
  color: #ffffff !important;
}
</style>
