<template>
  <v-footer
      color="#343330"
      v-bind="localAttrs"
      :padless="padless"
    >
      <v-card
        color="#343330"
        flat
        tile
        width="100%"
        class="text-center"
      >
        <v-card-text class="white--text">
          <strong>{{ new Date().getFullYear() }}</strong> — <strong>Devance</strong> — <strong>Grupo 1</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>