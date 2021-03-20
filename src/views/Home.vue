<template>
  <bui-page
    title="Dashboard"
    subtitle="Welcome to a Builderall application!"
  >
    <template #page-header-right>
      <b-button
        variant="primary"
        class="ml-auto"
        to="/create"
      >
        <bui-icon
          name="plus"
          white
          :size="18"
        />
        New calendar
      </b-button>
    </template>
    <bui-alert
      index="alert-01"
      content="Welcome!"
    />

    <InputButton
     :options="['masculino', 'feminino', 'outros']" v-model="sexo"/>
    {{ sexo }}
  </bui-page>
</template>

<script>
import InputButton from '../components/InputButton'
export default {
  data () {
    return {
      sexo: 'masculino'
    }
  },
  components: {
    InputButton
  }
}
</script>
