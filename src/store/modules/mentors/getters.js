export default {
  mentors(state) {
    return state.mentors
  },
  hasMentors(state) {
    return state.mentors && state.mentors.length > 0
  },
  isMentor(state, getters, rootState, rootGetters) {
    const mentors = getters.mentors
    const userId = rootGetters.userId
    return mentors.some((mentor) => mentor.id === userId) //metoda koja vraća true ako neki mentor zadovoljava kriterije
  },
}
