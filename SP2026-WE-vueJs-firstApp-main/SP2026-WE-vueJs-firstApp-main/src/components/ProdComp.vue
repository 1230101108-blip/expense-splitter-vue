<script setup>
defineProps(['name', 'email', 'index'])
const emit = defineEmits(['remove'])
</script>

<template>
  <div style="margin:12px 0; padding:15px; background:#f8f9fa; border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
    <span><strong>{{ index + 1 }}. {{ name }}</strong> — {{ email }}</span>
    <button @click="emit('remove', index)" style="background:#ff4444; color:white; padding:6px 12px;">
      Remove
    </button>
  </div>
</template>