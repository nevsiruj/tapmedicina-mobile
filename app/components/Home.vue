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
        
        <!-- Opción: Ver Perfil -->
        <StackLayout class="profile-option" @tap="goToProfile">
          <Image src="~/assets/icons/profile.png" class="option-icon" />
          <Label text="Ver Perfil" class="option-text" />
        </StackLayout>
        
        <!-- Opción: Historial Médico -->
        <StackLayout class="profile-option" @tap="goToMedicalHistory">
          <Image src="~/assets/icons/history.png" class="option-icon" />
          <Label text="Historial Médico" class="option-text" />
        </StackLayout>
        
        <!-- Opción: Atención Inmediata -->
        <StackLayout class="profile-option" @tap="requestImmediateCare">
          <Image src="~/assets/icons/immediate.png" class="option-icon" />
          <Label text="Atención Inmediata" class="option-text" />
        </StackLayout>
        
        <!-- Opción: Atención Programada -->
        <StackLayout class="profile-option" @tap="scheduleAppointment">
          <Image src="~/assets/icons/scheduled.png" class="option-icon" />
          <Label text="Atención Programada" class="option-text" />
        </StackLayout>
        
        <!-- Opción: Notificaciones -->
        <StackLayout class="profile-option" @tap="viewNotifications">
          <Image src="~/assets/icons/notifications.png" class="option-icon" />
          <Label text="Notificaciones" class="option-text" />
        </StackLayout>
        
        <!-- Opción: Cerrar Sesión -->
        <StackLayout class="profile-option" @tap="logout">
          <Image src="~/assets/icons/logout.png" class="option-icon" />
          <Label text="Cerrar Sesión" class="option-text danger-text" />
        </StackLayout>
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
  background-color: #1e1e2e;
}
.action-bar {
  background-color: #2b2b40;
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

.login-container {
  width: 100%;
  max-width: 320px;
  padding: 25px;
  background-color: #2b2b40;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  align-items: center;
}
.input {
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #444;
  background-color: #3b3b54;
  color: white;
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
}
.primary {
  background-color: #4a90e2;
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

.profile-container {
  width: 100%;
  max-width: 320px;
  padding: 25px;
  background: linear-gradient(135deg, #2b2b40, #3b3b54);
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  align-items: center;
  margin: 30px auto;
}
.welcome-text {
  font-size: 22px;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

/* Estilos para las opciones de perfil */
.profile-option {
  flex-direction: row;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 10px;
  width: 100%;
  transition: background-color 0.3s, transform 0.2s;
}
.profile-option:active {
  opacity: 0.8;
  transform: scale(0.98);
}
.option-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}
.option-text {
  font-size: 16px;
  color: white;
}
.danger-text {
  color: #ff5252;
}
</style>
