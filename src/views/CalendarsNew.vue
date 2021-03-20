<template>
  <bui-page
    title="Calendars"
    subtitle="Welcome to a Builderall application!"
    :breadcrumbs="breadcrumbs"
  >
    <template #breadcrumb-end>
      <b-button
        variant="light"
        class="ml-auto"
        to="/calendars"
      >
        Back
      </b-button>
    </template>
    <bui-alert
      index="alert-01"
      content="Welcome!"
    />

    <b-tabs>
      <b-tab active title="Consultation">
        <div class="text-center">
        <bui-form-group
          label="Nome do calendario"
          required
          help="O nome deve ser bem legal"
          max-chars="20"
          :value="name_calendar"
          :error="error"
          class="text-left"
        >
          <b-input type="text" v-model="name_calendar"></b-input>
        </bui-form-group>
        <b-button variant="primary">Create calendar</b-button>
        </div>
      </b-tab>
      <b-tab title="Event">

      </b-tab>
    </b-tabs>
  </bui-page>
</template>

<script>
export default {
  data () {
    return {
      name_calendar: '',
      breadcrumbs: [
        { text: 'Calendars' },
        { text: 'Create', active: true }
      ]
    }
  },

  computed: {
    error () {
      return this.name_calendar.indexOf(' ') > -1 ? 'Nao pode ter espaço' : undefined
    }
  }
}
</script>
