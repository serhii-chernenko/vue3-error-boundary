<script setup lang="ts">
import { onErrorCaptured, ref, shallowRef } from 'vue'

const error = ref<Error>()
const key = shallowRef<string>('')

onErrorCaptured((err): boolean => {
    error.value = err

    return false
})

const clearError = () => {
    error.value = undefined
    key.value = crypto.randomUUID()
}
</script>
<template>
    <slot v-if="error" name="error" :error="error" :clearError="clearError">
        <p class="pt-5 text-bold">⚠️ {{ (error as Error).message }}</p>
        <button
            type="button"
            title="Try again"
            class="mt-2"
            @click="clearError"
        >
            Try again
        </button>
    </slot>
    <div v-show="!error" :key="key">
        <slot></slot>
    </div>
</template>
