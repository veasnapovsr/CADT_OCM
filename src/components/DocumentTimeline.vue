<template>
  <div class=" h-full">

    <!-- TITLE -->
    <h3 class="text-lg font-khmer font-bold mb-10">
      ស្ថានភាពដំណើរការឯកសារ
    </h3>

    <!-- TIMELINE -->
    <div class="space-y-6">

      <div
        v-for="(step, index) in steps"
        :key="step.id"
        class="flex gap-4"
      >
        <!-- LEFT ICON + LINE -->
        <div class="relative flex flex-col items-center">
          <!-- ICON -->
          <div
            class="w-9 h-9 rounded-full flex items-center justify-center"
            :class="circleClass(index)"
          >
            <!-- GREEN -->
            <svg
              v-if="stepStatus(index) === 'green'"
              viewBox="0 0 24 24"
              class="w-4 h-4 text-green-600"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>

            <!-- YELLOW -->
            <svg
              v-else-if="stepStatus(index) === 'yellow'"
              viewBox="0 0 24 24"
              class="w-4 h-4 text-yellow-600"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
            >
              <circle cx="12" cy="12" r="9" />
            </svg>

            <!-- RED -->
            <svg
              v-else
              viewBox="0 0 24 24"
              class="w-4 h-4 text-red-600"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>

          <!-- LINE -->
          <div
            v-if="index < steps.length - 1"
            class="w-px flex-1 mt-1 border-dashed"
            :class="lineClass(index)"
          ></div>
        </div>

        <!-- CONTENT -->
        <div class="flex-1">
          <div class="flex justify-between items-start">
            <div>
              <p class="font-semibold" :class="textClass(index)">
                {{ step.title }}
              </p>
              <p class="text-sm text-gray-500">
                {{ step.subtitle }}
              </p>
            </div>

            <!-- SEND BACK BUTTON -->
            <button
              class="text-sm text-red-500 hover:underline"
              @click="replyingIndex = index"
            >
              ↩ បញ្ជូនទៅវិញ
            </button>
          </div>

          <span class="text-xs text-gray-400 block mt-1">
            {{ step.time }}
          </span>

          <!-- COMMENT BOX (ONLY WHEN CLICKED) -->
          <div
            v-if="replyingIndex === index"
            class="mt-4"
          >
            <textarea
              v-model="comment"
              rows="3"
              placeholder="បញ្ចូលមតិយោបល់..."
              class="w-full rounded-lg border p-3 text-sm focus:ring-2 focus:ring-blue-500"
            />

            <div class="text-right mt-3">
              <button
                class="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
                @click="sendComment(index)"
              >
                ➤ បញ្ជូនមតិយោបល់
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
    <!-- SEND DOCUMENT -->
<div class="mt-10">

  <!-- TITLE -->
  <h4 class="font-khmer font-semibold mb-10">
    បញ្ជូនឯកសារឱ្យ
  </h4>

 <!-- SEARCH + FILTER -->
<div class="flex gap-4 mb-10">
  <!-- SEARCH (LONGER, SOFT BORDER) -->
  <div class="flex-[2]">
    <input
      v-model="search"
      type="text"
      placeholder="ស្វែងរក"
      class="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm
             focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
    />
  </div>

  <!-- FILTER (SHORTER, MATCHING BORDER) -->
  <div class="flex-[1]">
   <select
  v-model="filter"
  class="w-full rounded-lg border border-gray-200
         px-4 py-2
         text-sm leading-relaxed
         focus:border-blue-400 focus:ring-1 focus:ring-blue-400
         appearance-none"
>
  <option value="" disabled hidden>
    ជ្រើសរើសប្រភេទ
  </option>
  <option value="department">department1</option>
  <option value="officer">department2</option>
</select>


  </div>
</div>

  <!-- PEOPLE LIST -->
  <div class="space-y-4 ">
    <div
      v-for="person in filteredPeople"
      :key="person.id"
      class="flex items-center justify-between mb-10"
    >
      <!-- LEFT INFO -->
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-gray-300"></div>

        <div>
          <p class="text-sm font-medium text-blue-700">
            {{ person.name }}
          </p>
          <p class="text-xs text-gray-500 flex items-center gap-1">
            {{ person.unit }}
          </p>
        </div>
      </div>

      <!-- SEND BUTTON -->
      <button
        class="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
        @click="sendTo(person)"
      >
        ➤ បញ្ជូនឯកសារ
      </button>
    </div>
  </div>

</div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { documents } from '@/data/documents'

/* ================= STATUS FROM API =================
  1  = approved (green)
  0  = pending (yellow)
 -1  = rejected (red)
==================================================== */
const stepsStatus = ref([1, 1, 1, 0])

/* ================= TIMELINE DATA ================= */
const steps = [
  {
    id: 1,
    title: 'នាយកដ្ឋានរដ្ឋបាល',
    subtitle: 'បានពិនិត្យ • ឯកឧត្តម ថោង សំអាត ',
    time: '06-មករា-2024 05:49'
  },
  {
    id: 2,
    title: 'ខុទ្ទកាល័យនឯប',
    subtitle: 'បានពិនិត្យ • ឯកឧត្តម សៀង ឈុនទ្រី ',
    time: '06-មករា-2024 05:57'
  },
  {
    id: 3,
    title: 'អង្គភាពជំនាញ',
    subtitle: 'កំពុងរង់ចាំ',
    time: '—'
  },
  {
    id: 4,
    title: 'លើកកំណត់បង្ហាញ',
    subtitle: 'កំពុងរង់ចាំ',
    time: '—'
  }
]

/* ================= REPLY LOGIC ================= */
const replyingIndex = ref(null)
const comment = ref('')

const sendComment = (index) => {
  console.log('Send comment for step:', steps[index])
  console.log('Comment:', comment.value)

  comment.value = ''
  replyingIndex.value = null
}

/* ================= SEND DOCUMENT ================= */
const search = ref('')
const filter = ref('')

const people = ref(
  Array.from(
    new Map(
      documents
        .flatMap(doc => [
          
          doc.sentTo
            ? { name: doc.sentTo, unit: 'អ្នកទទួលឯកសារ', type: 'department' }
            : null
        ])
        .filter(Boolean)
        .map(p => [p.name, p])
    ).values()
  ).map((p, i) => ({ id: i + 1, ...p }))
)

const filteredPeople = computed(() => {
  return people.value.filter(person => {
    const matchSearch =
      person.name.includes(search.value) ||
      person.unit.includes(search.value)

    const matchFilter = filter.value
      ? person.type === filter.value
      : true

    return matchSearch && matchFilter
  })
})

const sendTo = (person) => {
  console.log('Send document to:', person.name)
}

/* ================= STATUS HELPERS ================= */
const stepStatus = (index) => {
  const value = stepsStatus.value[index]
  if (value === 1) return 'green'
  if (value === -1) return 'red'
  return 'yellow'
}

const circleClass = (index) => {
  const s = stepStatus(index)
  if (s === 'green') return 'bg-green-100'
  if (s === 'red') return 'bg-red-100'
  return 'bg-yellow-100'
}

const lineClass = (index) => {
  const s = stepStatus(index)
  if (s === 'green') return 'border-green-300'
  if (s === 'red') return 'border-red-300'
  return 'border-yellow-300'
}

const textClass = (index) => {
  const s = stepStatus(index)
  if (s === 'green') return 'text-green-600'
  if (s === 'red') return 'text-red-600'
  return 'text-yellow-600'
}
</script>

