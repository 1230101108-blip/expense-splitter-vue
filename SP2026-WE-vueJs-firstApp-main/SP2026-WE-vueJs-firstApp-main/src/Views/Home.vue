<script setup>
import { ref, computed, onMounted, watch } from 'vue'

const participants = ref([])
const totalBill = ref(0)
let lastSavedBill = 0

onMounted(() => {
  const saved = localStorage.getItem('participants')
  participants.value = saved ? JSON.parse(saved).map(p => p.name) : []
})

watch(() => localStorage.getItem('participants'), (newVal) => {
  participants.value = newVal ? JSON.parse(newVal).map(p => p.name) : []
})

watch([totalBill, participants], () => {
  if (totalBill.value > 0 && participants.value.length > 0 && totalBill.value !== lastSavedBill) {
    let history = JSON.parse(localStorage.getItem('splitHistory') || '[]')
    history.unshift({
      date: new Date().toLocaleString(),
      totalBill: totalBill.value,
      participants: [...participants.value],
      perPerson: totalBill.value / participants.value.length
    })
    if (history.length > 10) history.pop()
    localStorage.setItem('splitHistory', JSON.stringify(history))
    lastSavedBill = totalBill.value
  }
})

const perPersonShare = computed(() => {
  return participants.value.length > 0 ? (totalBill.value / participants.value.length) : 0
})
</script>

<template>
  <h1 style="color:#1e40af;">Expense Splitter - Summary Report</h1>
  
  <h2 style="color:#1e40af;">Total Bill</h2>
  <input v-model="totalBill" type="number" placeholder="Enter total bill amount" style="width:280px; font-size:1.2em; padding:8px;" />
  
  <p style="font-size:1.1rem; color:#1e40af;"><strong>Total Participants:</strong> {{ participants.length }}</p>
  
  <div v-if="participants.length === 0" style="color:#1e40af; font-size:1.1rem;">
    Add participants first from Register.
  </div>
  <div v-else>
    <p style="font-size:1.2rem; color:#1e40af;"><strong>Each person should pay: ${{ perPersonShare.toFixed(2) }}</strong></p>

    <h2 style="color:#1e40af;">Summary</h2>
    <div v-for="(amount, person) in Object.fromEntries(participants.map(p => [p, perPersonShare]))" :key="person" 
         style="background:white; padding:15px; margin:10px 0; border-radius:8px; border:2px solid #bae6fd; color:#1e40af;">
      <strong>{{ person }}</strong> should pay <strong>${{ amount.toFixed(2) }}</strong>
    </div>
  </div>
</template>