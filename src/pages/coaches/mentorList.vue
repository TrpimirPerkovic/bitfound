<template>
  <section>Filter</section>
  <section>
    <base-card>
      <div class="controls">
        <base-button><button>Refresh</button></base-button>
        <base-button><router-link to="/register">Register as a mentor</router-link></base-button>
      </div>

      <ul v-if="hasMentors">
        <mentor-item
          v-for="mentor in filteredMentors"
          :key="mentor.id"
          :first-name="mentor.firstName"
          :last-name="mentor.lastName"
          :rate="mentor.hourlyRate"
          :areas="mentor.areas"
        ></mentor-item>
      </ul>
      <h3 v-else>No Mentors</h3>
    </base-card>
  </section>
</template>
<script>
import MentorItem from '../../components/mentors/MentorItem.vue'
export default {
  components: {
    MentorItem,
  },
  computed: {
    filteredMentors() {
      return this.$store.getters['mentors/mentors']
    },
    hasMentors() {
      return this.$store.getters['mentors/hasMentors']
    },
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
