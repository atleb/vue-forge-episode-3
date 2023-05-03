<script setup lang="ts">
import { Message, User } from "~~/types";

const props = defineProps<{
    message: Message,
    user?: User,
}>()

</script>

<template>
    <div className="chat chat-start">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img :src="user?.avatar" alt="{{ message.userId }}" />
            </div>
        </div>
        <div className="chat-header">
            {{ message.userId }}
            <time className="text-xs opacity-50">{{ message.createdAt }}</time>
        </div>
        <div className="chat-bubble"> - {{ message.text }}</div>
    </div>
    <!-- Code out the chatbox for Exercise 1 here
    all the messages in the chatbox as chat bubbles
    1. An image of the user
  2. A relative time the message was sent (1 minute ago, just now, etc)
  3. The name of the user who sent it 
  4. The message text within the bubble
    -->
</template>
  