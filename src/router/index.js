import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventDetails from '../views/EventDetails.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
<<<<<<< HEAD
  routes,
=======
  routes: [
    {path: '*', component: NotFoundComponent}
  ]
>>>>>>> parent of 8d6be02 (fix to 404 page)
})

export default router
