<template>
  <Page class="page">
    <!-- Barra de acción -->
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
        
        <!-- Opciones en columna (una debajo de la otra) -->
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
/* ---- Paleta de colores basada en tu imagen y el nuevo color (#c7e49c) ---- */
:root {
  --color-bg-dark: #062B3F;      /* Fondo principal */
  --color-bg-bar:  #0F3A4D;      /* Barra de acción */
  --color-green:   #17B978;      /* Verde principal */
  --color-green-alt: #c7e49c;    /* Color pastel pedido */
  --color-white:   #ffffff;
  --color-danger:  #EB5757;
}

/* Fondo principal de toda la página */
.page {
  background-color: var(--color-bg-dark);
}

/* Barra de acción */
.action-bar {
  background-color: var(--color-bg-bar);
  color: var(--color-white);
  text-align: center;
  padding: 16px;
}
.title {
  color: var(--color-white);
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

/* --------------------- Pantalla de Login --------------------- */
.login-container {
  width: 100%;
  max-width: 320px;
  padding: 25px;
  background-color: var(--color-bg-bar);
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
  color: var(--color-white);
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
  background-color: var(--color-green);
  color: var(--color-white);
}

/* --------------------- Pantalla Post-Login --------------------- */
.profile-container {
  width: 100%;
  max-width: 360px;
  padding: 30px;
  background-color: var(--color-bg-bar);
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  align-items: center;
  margin-top: 20px;
}
.welcome-text {
  font-size: 24px;
  color: var(--color-white);
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

/* Botones de opciones con degradado que mezcla verde y #c7e49c */
.option-button {
  background: linear-gradient(90deg, var(--color-green) 0%, var(--color-green-alt) 100%);
  color: var(--color-bg-dark);
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  margin-bottom: 12px;
  padding: 14px;
  text-align: center;
  transition: background-color 0.3s, transform 0.2s;
  border: none;
}
.option-button:active {
  opacity: 0.9;
  transform: scale(0.98);
}

/* Botón de cerrar sesión */
.danger {
  background: var(--color-danger);
  color: var(--color-white);
}
</style>
