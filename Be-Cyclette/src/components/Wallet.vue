<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{'bg-grey-2': true}"
  >
    <q-toolbar slot="header" class="">
      <!-- <q-btn
        flat
        @click="$refs.layout.toggleLeft()"
      >
        <q-icon name="menu" />
      </q-btn> -->

      <q-toolbar-title class="center">
        Be-Cyclette
        <div slot="subtitle">Running on Be-Cyclette v{{$q.version}}</div>
      </q-toolbar-title>
    </q-toolbar>


    <!--
      Replace following <div> with
      <router-view /> component
      if using subRoutes
    -->
    <q-list highlight>
        <q-item>
            <q-item-side left>
            <i class="material-icons">star_border</i>
          </q-item-side>
            <q-item-main>
            <q-item-tile label>John Doe</q-item-tile>
            <q-item-tile sublabel>Quasar enthusiast</q-item-tile>
            </q-item-main>
            <q-item-side right>
            <i class="material-icons">chevron_right</i>
            </q-item-side>
        </q-item>
        <q-item>
            <q-item-side left>
            <i class="material-icons">star_border</i>
          </q-item-side>
            <q-item-main>
            <q-item-tile label>John Doe</q-item-tile>
            <q-item-tile sublabel>Quasar enthusiast</q-item-tile>
            </q-item-main>
            <q-item-side right>
            <i class="material-icons">chevron_right</i>
            </q-item-side>
        </q-item>
        <q-item>
            <q-item-side left>
            <i class="material-icons">star_border</i>
          </q-item-side>
            <q-item-main>
            <q-item-tile label>John Doe</q-item-tile>
            <q-item-tile sublabel>Quasar enthusiast</q-item-tile>
            </q-item-main>
            <q-item-side right>
            <i class="material-icons">chevron_right</i>
            </q-item-side>
        </q-item>
        <q-item>
            <q-item-side left>
            <i class="material-icons">star_border</i>
          </q-item-side>
            <q-item-main>
            <q-item-tile label>John Doe</q-item-tile>
            <q-item-tile sublabel>Quasar enthusiast</q-item-tile>
            </q-item-main>
            <q-item-side right>
            <i class="material-icons">chevron_right</i>
            </q-item-side>
        </q-item>
    </q-list>
 


<!-- <p class="caption">Tab Panes below</p>
      <q-tabs color="secondary" align="justify">
        <q-tab default name="mails" slot="title" icon="mail" label="Mails" />
        <q-tab name="alarms" slot="title" icon="alarm" label="Alarms" />
        <q-tab name="movies" slot="title" icon="movie" label="Movies" />

        <q-tab-pane name="mails">Emails tab</q-tab-pane>
        <q-tab-pane name="alarms">Alarms tab</q-tab-pane>
        <q-tab-pane name="movies">Movies tab</q-tab-pane>
      </q-tabs> -->
  </q-layout>
</template>

<script>
import {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QTabs,
    QTabPane,
    QTab,
    QOptionGroup
} from 'quasar'



export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QTabs,
    QTab,
    QTabPane,
    QOptionGroup
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
