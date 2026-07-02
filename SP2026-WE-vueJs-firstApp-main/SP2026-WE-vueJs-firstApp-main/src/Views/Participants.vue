<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ParticipantItem from '../components/ProdComp.vue'

const router = useRouter()
const participantsList = ref([])

onMounted(() => {
  const saved = localStorage.getItem('participants')
  participantsList.value = saved ? JSON.parse(saved) : []
})

function removeParticipant(index) {
  if (confirm(`Remove ${participantsList.value[index].name}?`)) {
    participantsList.value.splice(index, 1)
    localStorage.setItem('participants', JSON.stringify(participantsList.value))
  }
}

function goToRegister() {
  router.push('/register')
}
</script>

<template>
  <h1 style="color:#1e40af;">Participants / Members</h1>
  <h2 style="color:#1e40af;">Total: {{ participantsList.length }}</h2>

  <button @click="goToRegister" style="margin-bottom:20px; padding:10px 20px;">
    ➕ Add More Participants
  </button>

  <ParticipantItem 
    v-for="(p, index) in participantsList" 
    :key="index"
    :name="p.name"
    :email="p.email || ''"
    :index="index"
    @remove="removeParticipant"
  />
  
  <div v-if="participantsList.length === 0" style="color:blue; text-align:center; font-size:1.1rem;">
    No participants yet. Register some from the Register page.
  </div>
</template>