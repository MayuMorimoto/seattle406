<template>
  <l-map style="height: 1024px" :zoom="zoom" :center="center">
    <l-tile-layer :url="url"></l-tile-layer>
    <l-marker :lat-lng="markerLatLng1" :icon="icon"></l-marker>
    <l-marker :lat-lng="markerLatLng2" :icon="icon"></l-marker>
  </l-map>
</template>

<script>
import L from 'leaflet';
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
import icon from '@/assets/marker.png';
import axios from 'axios';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 10, // {z: zoom}
      center: [47.313220, -1.319482], 
      markerLatLng1: [47.313220, -1.319482], // [{x:lat}, {y:lng}]
      markerLatLng2: [37.313220, -1.319482], // [{x:lat}, {y:lng}]
      users: [],
      icon: L.icon({
        iconUrl: icon,
        iconSize: [64, 64],
        iconAnchor: [16, 37]
      }),
    };
  },
  mounted() {
    // axiosを使って、APIアクセスを行う
    axios
      // jsonplaceholderからusersデータを取得
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // データの取得に成功した場合
        console.log(response.data);
        this.users = response.data
      })
      .catch(error => {
        // データの取得に失敗した場合
        console.log(error)
      })
  }
}
</script>
