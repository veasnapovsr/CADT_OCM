<template>
  <div class="items inpauth">
    <InputSelect
      :model-value="modelValue"
      :options="leaders"
      track-by="value"
      label="name"
      :placeholder="placeholder"
      :multiple="false"
      :clear-on-select="false"
      @update:model-value="handleUpdate"
    >
      <template #singleLabel="{ option }">
        <div class="ocm_cus_opt">
          <img v-if="option.img" class="option__image" :src="option.img" />
          <span>{{ option.name }}</span>
        </div>
      </template>
      
      <template #option="{ option }">
        <div class="ocm_cus_opt">
          <img v-if="option.img" :src="option.img" />
          <span>{{ option.name }}</span>
        </div>
      </template>
    </InputSelect>
  </div>
</template>

<script setup>
import { InputSelect } from '@/components/ui/inputselect'
import { leaders } from '@/data/leader.js'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'អ្នកបង្កើតឯកសារ'
  }
})

const emit = defineEmits(['update:modelValue'])

function handleUpdate(value) {
  // InputSelect already extracts the value, but ensure we emit it correctly
  emit('update:modelValue', value)
}
</script>
