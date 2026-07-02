<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', password: '' })

function registerParticipant() {
  if (!form.value.name.trim()) {
    alert('Name is required!')
    return
  }

  let participants = JSON.parse(localStorage.getItem('participants') || '[]')
  participants.push({
    name: form.value.name.trim(),
    email: form.value.email.trim() || 'no-email@example.com',
    password: form.value.password || '123'
  })
  localStorage.setItem('participants', JSON.stringify(participants))

  form.value = { name: '', email: '', password: '' }
  alert('Participant Registered Successfully!')
}
</script>

<template>
  <h1>Register New Participant</h1>
  
  <div style="padding:20px; border:1px solid #ccc; max-width:500px;">
    <input v-model="form.name" placeholder="Full Name" style="padding:8px; margin:5px; width:100%; box-sizing:border-box;" />
    <input v-model="form.email" type="email" placeholder="Email" style="padding:8px; margin:5px; width:100%; box-sizing:border-box;" />
    <input v-model="form.password" type="password" placeholder="Password" style="padding:8px; margin:5px; width:100%; box-sizing:border-box;" />
    <button @click="registerParticipant" style="margin-top:15px; padding:10px 20px;">Register Participant</button>
  </div>
</template>