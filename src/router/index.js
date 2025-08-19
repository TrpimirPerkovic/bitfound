import { createRouter, createWebHistory } from 'vue-router'

import mentorList from '../pages/coaches/mentorList.vue'
import MentorDetail from '../pages/coaches/MentorDetail.vue'
import MentorReg from '../pages/coaches/MentorReg.vue'
import ReqRecieved from '../pages/requests/ReqRecieved.vue'
import ContactMentor from '../pages/requests/ContactMentor.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/mentor' },
    {
      path: '/mentor',
      component: mentorList,
    },
    { path: '/mentor/:id', component: MentorDetail },
    { path: '/register', component: MentorReg },
    { path: '/contact', component: ContactMentor },
    { path: '/requests', component: ReqRecieved },
    { path: '/:notFound(.*)', component: null },
  ],
})

export default router
