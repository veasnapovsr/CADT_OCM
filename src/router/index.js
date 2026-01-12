import { createRouter, createWebHistory } from 'vue-router'

import AuthLayout from '../layouts/AuthLayout.vue'
import DashboardLayout from '../layouts/DashboardLayout.vue'
import SidebarLayout from '../components/SidebarLayout.vue'

import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Attendance from '../views/Attendance.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 🔐 AUTH (no sidebar)
    {
      path: '/login',
      component: AuthLayout,
      children: [
        {
          path: '',
          name: 'login',
          component: Login
        }
      ]
    },

    // 📊 DASHBOARD (no sidebar)
    {
      path: '/dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: Dashboard
        }
      ]
    },

    // 🧱 APP PAGES (WITH sidebar)
    {
      path: '/app',
      component: SidebarLayout,
      children: [
        {
          path: 'attendance',
          name: 'attendance',
          component: Attendance
        }
        // future pages go here
      ]
    },

    // Default
    {
      path: '/',
      redirect: '/login'
    }
  ]
})

export default router
