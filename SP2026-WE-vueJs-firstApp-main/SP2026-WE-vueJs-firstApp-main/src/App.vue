<script setup>
import { ref } from 'vue'

const msg = ref('Expense Splitter')
</script>

<template>
  <h1 style="text-align:center; font-size:2.8rem; font-weight:bold; color:#1e40af; margin-bottom:30px;">
    {{ msg }}
  </h1>

  <nav style="text-align:center; margin-bottom:30px; font-size:1.1rem;">
    <RouterLink to="/" style="margin:0 20px; text-decoration:none; font-weight:600;">Home</RouterLink>
    <RouterLink to="/register" style="margin:0 20px; text-decoration:none; font-weight:600;">Register</RouterLink>
    <RouterLink to="/participants" style="margin:0 20px; text-decoration:none; font-weight:600;">Participants</RouterLink>
    <RouterLink to="/history" style="margin:0 20px; text-decoration:none; font-weight:600;">History</RouterLink>
  </nav>

  <router-view />
</template>