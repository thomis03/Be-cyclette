<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{'bg-grey-2': true}"
  >
    <q-toolbar slot="header" class="" style="height: 200px">
    <q-btn flat style="margin-bottom: -120px;">
        <tbody> 
            <tr>
                <td style="text-align:center;"><q-icon name="directions_bike" /></td>
            </tr>
            <tr>
                <td class="text-right" style="font-size: 16px;">321 Km</td>
            </tr>
        </tbody>
    </q-btn>
      <q-toolbar-title class="center" style="font-size: 22px; font-weight: bold;">
        43512 points
      </q-toolbar-title>
      <q-btn flat style="margin-bottom: -120px;">
        <tbody> 
            <tr>
                <td style="text-align:center;"><q-icon name="timer" /></td>
            </tr>
            <tr>
                <td class="text-right" style="font-size: 16px;">22h</td>
            </tr>
        </tbody>
    </q-btn>
    </q-toolbar>

    <!--
      Replace following <div> with
      <router-view /> component
      if using subRoutes
    -->
    <q-list highlight inset-separator>
        <q-item style="height: 50px;" link to="/Brand">
            <q-item-side left>
                <q-icon name="star" color="orange" style="font-size: 25px" />
            <!-- <i class="material-icons" size="120">star_border</i> -->
          </q-item-side>
            <q-item-main>
            <q-item-tile label>Ikea</q-item-tile>
            </q-item-main>
            <q-item-side right>
                <q-icon name="chevron_right" style="font-size: 25px" />
            </q-item-side>
        </q-item>
        <q-item style="height: 50px;">
            <q-item-side left>
                <q-icon name="star_border" style="font-size: 25px" />
            <!-- <i class="material-icons" size="120">star_border</i> -->
          </q-item-side>
            <q-item-main>
            <q-item-tile label>Adidas</q-item-tile>
            </q-item-main>
            <q-item-side right>
                <q-icon name="chevron_right" style="font-size: 25px" />
            </q-item-side>
        </q-item>
        <q-item style="height: 50px;">
            <q-item-side left>
                <q-icon name="star_border" style="font-size: 25px" />
            <!-- <i class="material-icons" size="120">star_border</i> -->
          </q-item-side>
            <q-item-main>
            <q-item-tile label>Superdry</q-item-tile>
            </q-item-main>
            <q-item-side right>
                <q-icon name="chevron_right" style="font-size: 25px" />
            </q-item-side>
        </q-item>
        <q-item style="height: 50px;">
            <q-item-side left>
                <q-icon name="star_border" style="font-size: 25px" />
            <!-- <i class="material-icons" size="120">star_border</i> -->
          </q-item-side>
            <q-item-main>
            <q-item-tile label>Max</q-item-tile>
            </q-item-main>
            <q-item-side right>
                <q-icon name="chevron_right" style="font-size: 25px" />
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
