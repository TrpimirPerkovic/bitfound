import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
export default {
  namespaced: true,
  state() {
    return {
      mentors: [
        {
          id: 'c1',
          firstName: 'Trpimir',
          lastName: 'Perković',
          areas: ['frontend', 'career', 'backend'],
          description: 'I am Maximus Decimus Meridius',
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Ivonka',
          lastName: 'Klanrur',
          areas: ['frontend', 'career'],
          description: 'I am S1mple',
          hourlyRate: 40,
        },
      ],
    }
  },
  mutations,
  actions,
  getters,
}
