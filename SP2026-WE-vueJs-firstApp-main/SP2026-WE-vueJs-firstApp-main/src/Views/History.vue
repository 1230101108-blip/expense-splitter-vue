<script setup>
import { ref, onMounted } from 'vue'

const history = ref([])

onMounted(() => {
  const saved = localStorage.getItem('splitHistory')
  if (saved) history.value = JSON.parse(saved)
})
</script>

<template>
  <h1 style="color:#1e40af;">Split History</h1>
  
  <div v-if="history.length === 0" style="color:#1e40af; font-style:italic;">
    No previous splits yet.
  </div>
  
  <div v-for="(record, index) in history" :key="index" 
       style="margin:15px 0; padding:15px; background:white; border-radius:8px; border:2px solid #bae6fd; color:#1e40af;">
    <strong>Date:</strong> {{ record.date }}<br>
    <strong>Total Bill:</strong> ${{ record.totalBill }}<br>
    <strong>Participants ({{ record.participants.length }}):</strong> {{ record.participants.join(', ') }}<br>
    <strong>Each paid:</strong> ${{ record.perPerson.toFixed(2) }}
  </div>
</template>