<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label text="Telemedicina" class="title" />
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
        <Button text="Ver Perfil" @tap="goToProfile" class="button secondary" />
        <Button
          text="Historial Médico"
          @tap="goToMedicalHistory"
          class="button secondary"
        />
        <Button
          text="Atención Inmediata"
          @tap="requestImmediateCare"
          class="button secondary"
        />
        <Button
          text="Atención Programada"
          @tap="scheduleAppointment"
          class="button secondary"
        />
        <Button
          text="Notificaciones"
          @tap="viewNotifications"
          class="button secondary"
        />
        <Button text="Cerrar Sesión" @tap="logout" class="button danger" />
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';

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
    },
    requestImmediateCare() {
      console.log('Solicitando atención inmediata');
    },
    scheduleAppointment() {
      console.log('Agendando una cita médica');
    },
    viewNotifications() {
      console.log('Mostrando notificaciones');
    },
  },
});
</script>

<style scoped>
.page {
  background-color: #f4f4f4;
}

.action-bar {
  background-color: #6200ea;
  color: white;
  text-align: center;
  padding: 16px;
}

.title {
  color: white;
  font-size: 20px;
  font-weight: bold;
}

.container {
  padding: 20px;
  align-items: center;
}

.login-container,
.profile-container {
  width: 100%;
  max-width: 300px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  border-width: 1px;
  border-color: #ddd;
  shadow-radius: 5;
  shadow-opacity: 0.2;
  align-items: center;
}

.input {
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 10px;
}

.primary {
  background-color: #6200ea;
  color: white;
}

.secondary {
  background-color: #03dac6;
  color: white;
}

.danger {
  background-color: #b00020;
  color: white;
}

.welcome-text {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}
</style>
