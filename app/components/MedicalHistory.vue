<template>
  <Page class="page">
    <!-- Barra de acción -->
    <ActionBar title="Historial Médico" class="action-bar" />
    <ScrollView>
      <!-- Contenedor principal -->
      <StackLayout class="container">
        <Label text="Historial Médico" class="title" />

        <!-- Tabla con GridLayout -->
        <GridLayout columns="auto, *" rows="auto, auto, auto, auto, auto" class="history-table">
          <!-- Cabecera de la tabla -->
          <Label text="Fecha" class="table-header" col="0" row="0" />
          <Label text="Detalle" class="table-header" col="1" row="0" />

          <!-- Fila 1 -->
          <Label text="10/02/2025" class="table-cell" col="0" row="1" />
          <Label
            text="Diagnóstico: Gripe - Tratamiento: Reposo y Paracetamol"
            class="table-cell"
            col="1"
            row="1"
          />

          <!-- Fila 2 -->
          <Label text="08/01/2025" class="table-cell" col="0" row="2" />
          <Label
            text="Diagnóstico: Hipertensión - Tratamiento: Control médico y dieta baja en sodio"
            class="table-cell"
            col="1"
            row="2"
          />

          <!-- Fila 3 -->
          <Label text="12/12/2024" class="table-cell" col="0" row="3" />
          <Label
            text="Diagnóstico: Alergia estacional - Tratamiento: Antihistamínicos"
            class="table-cell"
            col="1"
            row="3"
          />

          <!-- Fila 4 -->
          <Label text="20/11/2024" class="table-cell" col="0" row="4" />
          <Label
            text="Diagnóstico: Dolor de espalda - Tratamiento: Analgésicos y fisioterapia"
            class="table-cell"
            col="1"
            row="4"
          />
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script lang="ts">
export default {
  name: 'MedicalHistory',
};
</script>

<!-- Quita el atributo "scoped" si el fondo no se aplica correctamente -->
<style>
/* Fondo con degradado para toda la página */
.page {
  background: linear-gradient(135deg, #062B3F, #0F3A4D) !important;
  width: 100%;
  height: 100%;
}

/* Barra de acción oscura */
.action-bar {
  background-color: #0F3A4D !important;
  color: #ffffff !important;
  font-size: 20px;
  text-align: center;
}

/* Contenedor principal, estilo "tarjeta" con degradado */
.container {
  width: 100%;
  max-width: 360px;
  background: linear-gradient(135deg, #0F3A4D, #2B2B40);
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  margin: 30px auto;
  padding: 30px;
}

/* Título principal */
.title {
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

/* Tabla con GridLayout */
.history-table {
  margin-top: 16px;
  width: 100%;
}

/* Cabecera de la tabla */
.table-header {
  background: linear-gradient(90deg, #17B978, #c7e49c);
  color: #062B3F;
  font-weight: 700;
  font-size: 16px;
  padding: 10px;
  border-bottom-width: 2px;
  border-bottom-color: #062B3F;
  border-bottom-style: solid;
  text-align: center;
}

/* Celdas comunes */
.table-cell {
  color: #ffffff;
  font-size: 14px;
  padding: 8px;
  border-bottom-width: 1px;
  border-bottom-color: #ffffff44; /* Línea divisoria semitransparente */
  border-bottom-style: solid;

  /* Efecto de fondo semitransparente para cada celda */
  background-color: #2B2B40AA;
  border-radius: 6px;
  margin: 4px 0;
}
</style>
