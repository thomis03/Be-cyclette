<template>
  <div>
  <q-toolbar>
        <q-btn @click="$router.push('/Discount')" flat>
          <q-icon><i class="material-icons">keyboard_backspace</i></q-icon>
        </q-btn>
        <q-toolbar-title>IKEA</q-toolbar-title>
  </q-toolbar>
  <div class="google-map" :id="mapName"></div>
  <div class="description">
    <h4><img class ="ikea_logo" src="../statics/ikea_logo.png" /></h4>
    <p>Pellentesque vel volutpat nisl, vel volutpat enim. Pellentesque habitant morbi. </p>
  </div>        
  <div> 

    <q-list highlight inset-separator>
      <q-item>
        <q-item-side avatar="statics/ticket.jpg" />
          <q-item-main label="5 % discount" label-lines="1" />
          <q-item-side right stamp="10 000 points" />
      </q-item>
      <q-item>
        <q-item-side avatar="statics/ticket.jpg" />
          <q-item-main label="15 % discount" label-lines="1" />
          <q-item-side right stamp="30 000 points" />
      </q-item>
      <q-item>
        <q-item-side avatar="statics/ticket.jpg" />
          <q-item-main label="20 % discount" label-lines="1" />
          <q-item-side right stamp="35 000 points" />
      </q-item>
      <q-item
          link
          v-for="position in ['top', 'bottom', 'left', 'right']"
          :key="position"
          @click="openSpecialPosition(position)"
          v-ripple.mat
        >
        <q-item-side icon="open_in_new" />
         <q-item-main :label="`Modal from ${position}`" />
         <q-item-side right icon="keyboard_arrow_right" />
       </q-item>
    </q-list>
  </div>
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
    // this.bounds = new google.maps.LatLngBounds()
    // const element = document.getElementById(this.mapName)
    // const mapCentre = this.markerCoordinates[0]
    // const options = {
    //   center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
    // }
    // this.map = new google.maps.Map(element, options)
    // this.markerCoordinates.forEach((coord) => {
    //   const position = new google.maps.LatLng(coord.latitude, coord.longitude)
    //   const marker = new google.maps.Marker({
    //     position,
    //     map: this.map
    //   })
    //   this.markers.push(marker)
    //   this.map.fitBounds(this.bounds.extend(position))
    // })
  }

}
</script>

<style scoped>
.google-map {
  width: 100%;
  height: 200px;
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
