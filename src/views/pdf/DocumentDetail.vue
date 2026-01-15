<template>
  <!-- TOP HEADER -->
  <Header />

  <section class="appppw">
    <div class="flex h-[calc(100vh-64px)] overflow-hidden">
      <!-- SIDEBAR -->
      <Aside />

      <!-- MAIN CONTENT WRAPPER (KEEP sw) -->
      <div class="sw flex flex-col flex-1 overflow-hidden">
        <div class="app_content flex flex-col flex-1 overflow-hidden">

          <!-- PAGE TITLE -->
          <div class="ocm_cwr ">
            <h2 class="h wttt t-lspace font-khmer font-bold text-blue-600">ផែនការសកម្មភាព ២០២៤-២០២៨ ដើម្បីអនុវត្ដវិធានការគន្លឹះក្នុងការកែទម្រង់រដ្ឋបាលសាធារណៈ</h2>
          </div>
          
          <!-- PDF + TOOLS -->
          <div class="flex flex-1 overflow-hidden">
            <!-- LEFT : PDF -->
            <div class="flex-1 overflow-hidden">
              <PdfViewer
                src="/public/docs/reportMenu.pdf"
                class="w-full h-full"
              />
            </div>

            <!-- RIGHT : WORKFLOW / TIMELINE -->
            <div
              class="w-[360px]   overflow-y-auto  p-4"
            >
              <DocumentTimeline />
            </div>
          </div>

        </div>

        <!-- FOOTER -->
      </div>
    </div>
  </section>
</template>


<script setup>
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'
import Footer from '@/components/Footer.vue'
import PdfViewer from '@/components/PdfViewer.vue'
import DocumentTimeline from '@/components/DocumentTimeline.vue'
</script>
