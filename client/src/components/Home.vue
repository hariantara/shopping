<template lang="html">
  <div>
    <div class="container">
      <div class="row sdbar">
        <router-view/>
          <Sidebar/>
          <div class="row">
            <div class="col-md-8">
              <Thumbnail/>
            </div>
          </div>
        <!-- <vue-editor/> -->
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Thumbnail from '@/components/Thumbnail'
export default {
  components: {
    Sidebar,
    Thumbnail
  }
}
</script>

<style lang="css">
.row.sdbar {
    margin-top: 73px;
}
</style>
