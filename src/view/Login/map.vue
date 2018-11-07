<template>
<div>
     
  <cube-page  title="地图" class="option-demo">
    <div slot="content">
        <baidu-map center="北京" :style="{width:mwidth,height:mheight}" :zoom="15"></baidu-map>
  </div>   
  </cube-page>
  </div>
</template>
<script src="https://unpkg.com/vue-baidu-map"></script>
<script type="text/ecmascript-6">
import cubePage from "../../components/cube-page";
export default {
  components: {
    cubePage
  },
  data() {
    return {
      mwidth:'100%',
      mheight:'100vh',
      pdt:'-60px',
      center: {lng: 0, lat: 0},
      zoom: 3,
      mapStyle: {
        styleJson: [
          {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": {
                "hue": "#007fff",
                "saturation": 89
            }
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": {
                "color": "#ffffff"
            }
          }
        ]
      }
    };
  },
  created(){
　　//this.mheight = window.innerHeight-64+'px';
  },
  computed: {
    
  },
  methods: {
   
  },
  mounted() {
  }
};
</script>
<style>
   
</style>