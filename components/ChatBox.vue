<script setup lang="ts">
import { Message, User } from "~~/types";

function getUser(userId: string) {
  return props.users.find(user => user.id === userId)
}

const props = defineProps<{
  messages: Message[],
  users: User[],
  me: User,
  usersTyping?: User[],
}>() 
</script>

<template>
  <ul class="messages">
    <li v-for="msg of messages" :key="msg.id">
      <ChatBubble :message="msg" :user="getUser(msg.userId)" />
    </li>
  </ul>
</template>