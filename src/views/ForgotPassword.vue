

<template>
  <div class="login login-action-login">
    <div id="login">
      <h1 role="presentation" class="wp-login-logo">
        <img src="../assets/logo_main.svg" />
      </h1>
      <h2 class="t-lspace bold">
        កម្មវិធីបរិវត្តកម្មឌីជីថលទីស្តីការគណៈរដ្ឋមន្ត្រី
      </h2>

      <!-- Step 1: Request Reset Code -->
      <form v-if="step === 1" @submit.prevent="handleRequestReset" class="step1">
        <div class="input-wrapper mb-15">
          <input
            id="user_identifier"
            class="input form-control"
            v-model="identifier"
            type="text"
            autocomplete="off"
            placeholder="អ៊ីមែល ឬ លេខទូរស័ព្ទ"
            required
          />
          <div class="prefix">
            <!-- mail/phone icon -->
            <!-- ...icon SVG... -->
          </div>
        </div>
        <button type="submit" class="button button-primary button-large w-full mt-2">
          ស្នើសុំលេខកូដ
        </button>
      </form>

      <!-- Step 2: Enter Code -->
      <div v-if="step === 2" class="step2 fixed inset-0 z-50 flex items-center justify-center" style="background: rgba(0,0,0,0.2);">
        <div class="bg-white rounded-lg shadow-lg p-8 relative w-full max-w-xs flex flex-col items-center">
          <button @click="resetFlow" class="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl font-bold">×</button>
          <div class="mb-4 text-center font-semibold">បញ្ចូលលេខកូដ ៦ ខ្ទង់</div>
          <input
            id="otp"
            class="input form-control text-lg mb-4"
            v-model="otp"
            type="text"
            maxlength="6"
            pattern="[0-9A-Z]{6}"
            autocomplete="one-time-code"
            placeholder="xxxxxx"
            required
            style="text-align: center;"
          />
          <button class="button button-primary" @click="handleVerifyOtp">ផ្ញើលេខកូដ</button>
          <div v-if="otpMessage" class="mt-2 text-center text-red-600">{{ otpMessage }}</div>
        </div>
      </div>

      <!-- Step 3: Set New Password -->
      <form v-if="step === 3" @submit.prevent="handleResetPassword">
        <div class="input-wrapper mb-15">
          <input
            id="new_password"
            class="input form-control"
            v-model="newPassword"
            type="password"
            autocomplete="new-password"
            placeholder="ពាក្យសម្ងាត់ថ្មី"
            required
          />
        </div>
        <div class="input-wrapper mb-15">
          <input
            id="confirm_password"
            class="input form-control"
            v-model="confirmPassword"
            type="password"
            autocomplete="new-password"
            placeholder="បញ្ជាក់ពាក្យសម្ងាត់ថ្មី"
            required
          />
        </div>
        <button type="submit" class="button button-primary button-large w-full mt-2">
          ផ្លាស់ប្ដូរពាក្យសម្ងាត់
        </button>
      </form>

      <div v-if="message" class="mt-4 text-green-600 text-center">{{ message }}</div>
      <div class="mt-4 text-right hover:underline">
        <router-link to="/login" class="text-blue-500 hover:underline">ត្រឡប់ទៅទំព័រចូល</router-link>
      </div>
    </div>
  </div>

  <footer class="ocm_footer login_ac">
    រក្សាសិទ្ធិគ្រប់យ៉ាងដោយទីស្តីការគណៈរដ្ឋមន្ត្រី
  </footer>
</template>

<script>
import { ref } from "vue"

export default {
  name: "ForgotPassword",
  setup() {
    const VITE_API_SERVER = import.meta.env.VITE_API_SERVER
    const identifier = ref("")
    const message = ref("")
    const step = ref(1)
    const otp = ref("")
    const otpMessage = ref("")
    const newPassword = ref("")
    const confirmPassword = ref("")

    // const handleRequestReset = async () => {
    //   message.value = ""
    //   otpMessage.value = ""
    //   try {
    //     const res = await fetch(`${import.meta.env.VITE_API_SERVER}/authentication/forgot`, {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ email: identifier.value })
    //     })
    //     const data = await res.json()
    //     if (data.ok) {
    //       step.value = 2
    //       message.value = data.message || "សូមបញ្ចូលលេខកូដដែលបានផ្ញើទៅអ៊ីមែលរបស់អ្នក។"
    //     } else {
    //       message.value = data.message || "Email មិនត្រឹមត្រូវ។"
    //     }
    //   } catch (e) {
    //     message.value = "បញ្ហាការភ្ជាប់បណ្តាញ។"
    //   }
    // }

const handleRequestReset = async () => {
  message.value = ""
  otpMessage.value = ""
  try {
    const res = await fetch(`${import.meta.env.VITE_API_SERVER}/authentication/forgot`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: identifier.value })
    })
    // If response is 204, there may be no body, so handle gracefully
    let data = {}
    try {
      data = await res.json()
      console.log("Response data:", data)
    } catch (e) {
      // If no JSON, fallback
    }
    if (res.status === 200 || data.ok) {
      step.value = 2
      message.value = data.message || "សូមបញ្ចូលលេខកូដដែលបានផ្ញើទៅអ៊ីមែលរបស់អ្នក។"
    } else {
      message.value = data.message || "Email មិនត្រឹមត្រូវ។"
    }
  } catch (e) {
    message.value = "បញ្ហាការភ្ជាប់បណ្តាញ។"
  }
}

    const handleVerifyOtp = async () => {
      otpMessage.value = ""
      if (otp.value.length !== 6 || !/^[0-9A-Z]{6}$/.test(otp.value)) {
        otpMessage.value = "លេខកូដមិនត្រឹមត្រូវទេ។"
        return
      }
      try {
        const res = await fetch(`${VITE_API_SERVER}/forgot/confirm`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: identifier.value, code: otp.value })
        })
        const data = await res.json()
        if (data.ok) {
          otpMessage.value = ""
          step.value = 3
          message.value = "កូដត្រឹមត្រូវ សូមបញ្ចូលពាក្យសម្ងាត់ថ្មី។"
        } else {
          otpMessage.value = data.message || "កូដមិនត្រឹមត្រូវ។"
        }
      } catch (e) {
        otpMessage.value = "បញ្ហាការភ្ជាប់បណ្តាញ។"
      }
    }

    const handleResetPassword = async () => {
      message.value = ""
      if (!newPassword.value || newPassword.value !== confirmPassword.value) {
        message.value = "ពាក្យសម្ងាត់មិនត្រូវគ្នា។"
        return
      }
      try {
        const res = await fetch(`${VITE_API_SERVER}/reset`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: identifier.value, password: newPassword.value })
        })
        const data = await res.json()
        if (data.ok) {
          message.value = "ផ្លាស់ប្ដូរពាក្យសម្ងាត់ថ្មីបានជោគជ័យ!"
          step.value = 1
          identifier.value = ""
          otp.value = ""
          newPassword.value = ""
          confirmPassword.value = ""
        } else {
          message.value = data.message || "បរាជ័យក្នុងការផ្លាស់ប្ដូរពាក្យសម្ងាត់។"
        }
      } catch (e) {
        message.value = "បញ្ហាការភ្ជាប់បណ្តាញ។"
      }
    }

    const resetFlow = () => {
      step.value = 1
      identifier.value = ""
      otp.value = ""
      newPassword.value = ""
      confirmPassword.value = ""
      message.value = ""
      otpMessage.value = ""
    }

    return {
      identifier,
      message,
      step,
      otp,
      otpMessage,
      newPassword,
      confirmPassword,
      handleRequestReset,
      handleVerifyOtp,
      handleResetPassword,
      resetFlow
    }
  }
}
</script>

<style scoped>
#otp::placeholder {
  padding-right: 14px;
}
</style>