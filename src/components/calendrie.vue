<template>
  <v-container>
    <v-row>
      <v-col>
        <!-- Utilisation du composant v-calendar -->
        <v-calendar
          v-model:visible="visible"
          :events="events"
          :event-color="eventColor"
          :event-text-color="eventTextColor"
        ></v-calendar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import 'v-calendar/style.css';
// Utilise le composant Calendar directement

const visible = ref(true)
const events = ref([
  { name: 'Event 1', start: '2024-08-20', end: '2024-08-21' },
  { name: 'Event 2', start: '2024-08-25' }
])

const eventColor = '#42A5F5'
const eventTextColor = '#FFFFFF'
</script>

<style>
/* Ajoute ici les styles nécessaires */
</style>
