<template>
  <div class="login login-action-login">
    <div id="login">
      <h1 role="presentation" class="wp-login-logo"><img src="../assets/logo_main.svg"></h1>
      <h2 class="t-lspace bold">កម្មវិធីបរិវត្តកម្មឌីជីថលទីស្តីការគណៈរដ្ឋមន្ត្រី</h2>
      <div class="input-wrapper">
      <input id="user_login" class="input" v-model="email" type="text" autocomplete="off" placeholder="ឈ្មោះអ្នកប្រើប្រាស់" @keyup.enter="login" />
      <div class="prefix"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5 transition-colors duration-200"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path></svg></div>
      </div>
      <div class="input-wrapper">
      <input id="user_pass" class="input password-input" v-model="password" type="password" placeholder="លេខសំងាត់" @keyup.enter="login" />
      <div class="prefix"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5 transition-colors duration-200"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"></path></svg></div>
      </div>
      <p class="forgetmenot"><input name="rememberme" type="checkbox" id="rememberme" value="forever"  /> <label for="rememberme">ចងចាំគណនីខ្ញុំ</label></p>
      <button id="wp-submit" class="button button-primary button-large" @click="login"><span class="form_i"><svg version="1.1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" enable-background="new 0 0 512 512" xml:space="preserve" viewBox="48 48 416 416"><g><g><g><path d="M192,277.4h189.7l-43.6,44.7L368,352l96-96l-96-96l-31,29.9l44.7,44.7H192V277.4z"></path></g></g><g><path d="M255.7,421.3c-44.1,0-85.5-17.2-116.7-48.4c-31.2-31.2-48.3-72.7-48.3-116.9c0-44.1,17.2-85.7,48.3-116.9 			c31.2-31.2,72.6-48.4,116.7-48.4c44,0,85.3,17.1,116.5,48.2l30.3-30.3c-8.5-8.4-17.8-16.2-27.7-23.2C339.7,61,298.6,48,255.7,48 			C141.2,48,48,141.3,48,256s93.2,208,207.7,208c42.9,0,84-13,119-37.5c10-7,19.2-14.7,27.7-23.2l-30.2-30.2 			C341.1,404.2,299.7,421.3,255.7,421.3z"></path><rect x="447.4" y="255.4" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 583.767 753.7971)" width="1.2" height="1.2"></rect></g></g></svg></span>ចូលប្រព័ន្ធ</button>
      <span v-if="error" type="error" class="error_msg">ឈ្មោះអ្នកប្រើ ឬពាក្យសម្ងាត់ខុស</span>  
    </div>
  </div>
  <footer class="ocm_footer login_ac">រក្សាសិទ្ធិគ្រប់យ៉ាងដោយទីស្តីការគណៈរដ្ឋមន្ត្រី</footer>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  setup() {    
    const email = ref('');
    const password = ref('');
    const error = ref('');
    const router = useRouter();

    // Check if the user is already logged in
    onMounted(() => {
      const token = localStorage.getItem('token');
      if (token) {
        router.push('/dashboard'); // Redirect to dashboard if token exists
      }
    });

    const login = async () => {
      if (!email.value || !password.value) {
        error.value = 'Email and password are required.';
        return;
      }      

  try {
    const response = await axios.post('http://10.11.11.68:8001/api/authcenter/authentication/login', {
      email: email.value,
      password: password.value,
    });

    // Assuming the token is in response.data.token
    const token = response.data.token; // Get the token from the response
    const record = response.data.record; // Get the token from the response
    const userData = {
      token: response.data.token,
      // Add other user data if needed
    };

    // Store the token in localStorage
    localStorage.setItem('upload_max_filesize', response.data.upload_max_filesize); // Store the token as a string
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(record));
    // localStorage.setItem('token', token); // Store the token as a string

    console.log(response.data);

    // Redirect to dashboard
    router.push('/dashboard');
  } catch (err) {
    if (err.response && err.response.data) {
      error.value = err.response.data.message || 'Login failed. Please check your credentials.';
    } else {
      error.value = 'An error occurred. Please try again later.';
    }
  }
};

    return { email, password, login, error };
  },
};
</script>