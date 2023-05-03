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
            <time className="text-xs opacity-50">{{
                useTimeAgo(message?.createdAt).value
            }}</time>
        </div>
        <div className="chat-bubble"> - {{ message.text }}</div>
    </div>
</template>
  