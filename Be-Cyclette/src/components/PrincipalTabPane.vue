<template>
    <q-layout>
        <q-tabs style="position: fixed; bottom: 0; width: 100%;" position="bottom" color="secondary" align="justify" >
            <q-tab default name="mails" slot="title" icon="mail" label="Mails" replace to="Hello"/>
            <q-tab name="alarms" slot="title" icon="alarm" label="Alarms" />
            <q-tab name="movies" slot="title" icon="movie" label="Movies" />


            <q-tab-pane name="mails">Emails tab</q-tab-pane>
            <q-tab-pane name="alarms">Alarms tab</q-tab-pane>
            <q-tab-pane name="movies">Movies tab</q-tab-pane>
        </q-tabs>
        <!-- <q-tabs slot="navigation" >
            <q-route-tab slot="title"  to="Hello" replace icon="mail" label="Mails"/>
            <q-route-tab slot="title"  to="/showcase/layout/drawer-panels" replace icon="alarm" label="Alarms"  />
            <q-route-tab slot="title"  to="/showcase/layout/fixed-positioning" replace icon="movie" label="Movies"/>
        </q-tabs> -->
    </q-layout>
</template>

<script>
import {
  QLayout,
  QTabs,
  QTabPane,
  QTab,
  QOptionGroup,
  QToolbar,
  QToolbarTitle,
  QSearch,
  QRouteTab,
  QBtn,
  QIcon,
  QItemSide,
  QItemMain,
  QSideLink,
  QListHeader,
  QScrollArea
} from 'quasar'

export default {
  name: 'index',
  components: {
    QLayout,
    QTabs,
    QTab,
    QTabPane,
    QOptionGroup,
    QToolbar,
    QToolbarTitle,
    QSearch,
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
      tab: 'mails'
    }
  }
}
</script>

<style lang="stylus">
.center
  text-align:center;

.logo-container
  width 255px
  height 242px
  perspective 800px
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)
.logo
  position absolute
  transform-style preserve-3d
</style>
