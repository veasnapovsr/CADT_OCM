<template>
  <tr>
    <!-- INDEX -->
    <td>{{ index + 1 }}</td>

    <!-- DOCUMENT INFO -->
    <td>
      <span class="jl_tbl_w">
        <span class="ocm_docfw">
          <span class="ocm_docf d-flex flex-column align-items-center">
            PDF
          </span>
          {{ doc.size }}
        </span>

        <span class="jl_tbl_c">
          <span class="tb_n1 bold ellip-2"
              :title="doc.title">
            {{ doc.title }}
          </span>
          <span class="tb_n1 fs-95">
            លិខិតលេខ: {{ doc.code }}
          </span>
        </span>
      </span>
    </td>

    <!-- CREATOR -->
    <td>
      <span class="jl_tbl_w jl_mins">
        <span class="jl_tbl_img">
          <img :src="doc.creatorAvatar" alt="creator" />
        </span>
        <span class="jl_tbl_c bold">
          {{ doc.creator }}
        </span>
      </span>
    </td>

    <!-- DATE -->
    <td>
      {{ doc.date }}
    </td>

    <!-- SENT TO + TIME AGO -->
    <td>
      ឯកសារដល់:<br />
      <span class="bold">{{ doc.sentTo }}</span><br />
      <small class="fs-95 text-muted">
        {{ sentAgo }}
      </small>
    </td>

    <!-- STATUS -->
    <td>
      <span class="ocm_status" :class="statusClass">
        {{ statusText }}
      </span>
    </td>

<!-- ACTIONS -->
<td class="tbl_action">
  <div class="flex gap-2">
    <!-- VIEW -->
    <button
      class="action-btn view"
      title="មើលឯកសារ"
      @click="goToDetail"
    >
      👁
    </button>

    <!-- EDIT -->
    <button
      class="action-btn edit"
      title="កែប្រែ"
      @click="goToEdit"
      :disabled="doc.status === 'approved'"
    >
      ✏️
    </button>

    <!-- DELETE -->
    <button
      class="action-btn delete"
      title="លុប"
      @click="deleteRow"
      :disabled="doc.status === 'approved'"
    >
      🗑
    </button>
  </div>
</td>

  </tr>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { documents } from '@/data/documents'

/* ===================== PROPS ===================== */
const props = defineProps({
  doc: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

/* ===================== ROUTER ===================== */
const router = useRouter()

/* ===================== ACTIONS ===================== */
const goToDetail = () => {
  router.push({
    name: 'pdf-documents-detail',
    params: { id: props.doc.id }
  })
}

const goToEdit = () => {
  router.push({
    name: 'pdf-documents-edit',
    params: { id: props.doc.id }
  })
}

const deleteRow = () => {
  if (!confirm('តើអ្នកពិតជាចង់លុបឯកសារនេះមែនទេ?')) return

  const idx = documents.findIndex(d => d.id === props.doc.id)
  if (idx !== -1) {
    documents.splice(idx, 1)
  }
}

/* ===================== STATUS MAP ===================== */
const statusMap = {
  pending: {
    text: 'មិនទាន់អនុម័ត',
    class: 'acpending'
  },
  approved: {
    text: 'អនុម័តរួច',
    class: 'acapr'
  },
  rejected: {
    text: 'មិនយល់ព្រម',
    class: 'acdecl'
  },
  draft: {
    text: 'ព្រាង',
    class: 'acdraft'
  }
}

/* ===================== STATUS COMPUTED ===================== */
const statusText = computed(() => {
  return statusMap[props.doc.status]?.text || ''
})

const statusClass = computed(() => {
  return statusMap[props.doc.status]?.class || ''
})

/* ===================== SENT AGO ===================== */
const sentAgo = computed(() => {
  if (!props.doc.sentAt) return ''

  const now = new Date()
  const past = new Date(props.doc.sentAt)
  const diffSeconds = Math.floor((now - past) / 1000)

  if (diffSeconds < 60) return `${diffSeconds} វិនាទីមុន`

  const minutes = Math.floor(diffSeconds / 60)
  if (minutes < 60) return `${minutes} នាទីមុន`

  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours} ម៉ោងមុន`

  const days = Math.floor(hours / 24)
  return `${days} ថ្ងៃមុន`
})
</script>
