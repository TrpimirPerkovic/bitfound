export default {
  registerMentor(context, data) {
    const mentorData = {
      id: 'c3',
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    }
    context.commit('registerMentor', mentorData)
  },
}
