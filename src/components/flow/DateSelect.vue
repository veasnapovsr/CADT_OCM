<template>
  <div class="items">
    <Popover>
      <PopoverTrigger as-child>
        <Button
          variant="outline"
          :class="cn(
            'w-full h-[35px] justify-start text-left font-normal text-[15px]',
            !date && 'text-muted-foreground',
          )"
        >
          <CalendarIcon class="mr-2 h-4 w-4" />
          {{ date ? date.toDate(timeZone).toDateString() : 'ជ្រើសរើសកាលបរិច្ឆេទ' }}
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-auto p-0">
        <Calendar
          v-model="date"
          :initial-focus="true"
          :default-placeholder="defaultPlaceholder"
          layout="month-and-year"
        />
      </PopoverContent>
    </Popover>
  </div>
</template>

<script setup>
import { getLocalTimeZone, today, parseDate } from '@internationalized/date'
import { CalendarIcon } from 'lucide-vue-next'
import { computed } from 'vue'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const props = defineProps({
  modelValue: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['update:modelValue'])

const timeZone = getLocalTimeZone()
const defaultPlaceholder = today(timeZone)

// Convert string to DateValue for the calendar (Calendar component needs DateValue)
const date = computed({
  get: () => {
    if (!props.modelValue) return undefined
    try {
      // Parse string (YYYY-MM-DD) to DateValue
      return parseDate(props.modelValue)
    } catch {
      return undefined
    }
  },
  set: (value) => {
    if (!value) {
      emit('update:modelValue', null)
      return
    }
    // Convert DateValue to string (YYYY-MM-DD format)
    const dateObj = value.toDate(timeZone)
    const year = dateObj.getFullYear()
    const month = String(dateObj.getMonth() + 1).padStart(2, '0')
    const day = String(dateObj.getDate()).padStart(2, '0')
    emit('update:modelValue', `${year}-${month}-${day}`)
  }
})
</script>
