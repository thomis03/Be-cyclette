<template>
  <div>
  <q-toolbar>
        <q-toolbar-title>Map</q-toolbar-title>
  </q-toolbar>
  <div class="google-map" :id="mapName"></div>
  <center>
  <table class="q-table">

      <tbody >
        <tr>
          <td class="text-left"><q-item-side avatar="statics/cone.png" /></td>
          <td class="text-right"><q-item-side avatar="statics/parking.png" /></td>
          <td class="text-right"><q-item-side avatar="statics/snow.png" /></td>
          <td class="text-right"><q-item-side avatar="statics/traffic.png" /></td>
        </tr>
      </tbody>

</table>
</center>
</div>
</template>

<script>
import {
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSeparator,
  QItemSide,
  QItemMain,
  QItemTile,
  QChip,
  QModal,
  QModalLayout,
  QPopover
} from 'quasar'

export default {
  name: 'google-map',
  props: ['name'],
  components: {
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSeparator,
    QItemSide,
    QItemMain,
    QItemTile,
    QChip,
    QModal,
    QModalLayout,
    QPopover
  },

  data: function () {
    return {
      mapName: this.name + '-map',
      markerCoordinates: [{
        latitude: 57.774211,
        longitude: 14.204999
      }],
      map: null,
      bounds: null,
      markers: [],
      search: '',
      types: [
        {
          label: 'Basic',
          ref: 'basicModal'
        },
        {
          label: 'Basic with Events',
          ref: 'eventsModal'
        },
        {
          label: 'With Layout',
          ref: 'layoutModal'
        },
        {
          label: 'Always Minimized',
          ref: 'minimizedModal'
        },
        {
          label: 'Always Maximized',
          ref: 'maximizedModal'
        }
      ],
      position: 'bottom'

    }
  },

  methods: {
    notify (eventName) {
    },
    openSpecialPosition (position) {
      this.position = position
      this.$nextTick(() => {
        this.$refs.positionModal.open()
      })
    }
  },

  mounted: function () {
    this.bounds = new google.maps.LatLngBounds()
    const element = document.getElementById(this.mapName)
    const mapCentre = this.markerCoordinates[0]
    const options = {
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
    }
    this.map = new google.maps.Map(element, options)
    this.markerCoordinates.forEach((coord) => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude)
      const marker = new google.maps.Marker({
        position,
        map: this.map
      })
      this.markers.push(marker)
      this.map.fitBounds(this.bounds.extend(position))
    })
  }

}
</script>

<style scoped>
.google-map {
  width: 100%;
  height: 480px;
  margin: 0 auto;
  background: gray;
}
.description {
  width: 100%;
  margin-right: 10px;
  margin-left: 10px;
  /*background-color: lightgrey;*/
}
.ikea_logo{
  margin: auto;
  width: 100px;
  height: 35px;
}

</style>
