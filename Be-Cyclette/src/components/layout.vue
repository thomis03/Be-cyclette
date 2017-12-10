<template>
  <q-layout
    ref="layout"
    :view="layoutStore.view"
    :left-breakpoint="layoutStore.leftBreakpoint"
    :right-breakpoint="layoutStore.rightBreakpoint"
    :reveal="layoutStore.reveal"
  >
    <q-tabs style="position: fixed; bottom: 0; width: 100%;" Position="bottom" slot="navigation" v-if="!layoutStore.hideTabs">
      <q-route-tab default slot="title" icon="monetization_on" to="Discount" replace label="Discount" />
      <q-route-tab slot="title" icon="account_balance_wallet" to="Wallet" replace label="Wallet" />
      <q-route-tab slot="title" icon="map" to="Map" replace label="Map" />
      <q-route-tab slot="title" icon="settings" to="Setting" replace label="Settings" />
    </q-tabs>
    <router-view />
  </q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QSearch,
  QTabs,
  QRouteTab,
  QBtn,
  QIcon,
  QItemSide,
  QItemMain,
  QSideLink,
  QListHeader,
  QScrollArea
} from 'quasar'
import layoutStore from './layout-store'
export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QSearch,
    QTabs,
    QRouteTab,
    QBtn,
    QIcon,
    QItemSide,
    QItemMain,
    QSideLink,
    QListHeader,
    QScrollArea
  },
  data () {
    return {
      layoutStore
    }
  }
}
</script>
