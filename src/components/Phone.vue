<script setup lang="ts">
import { ref } from 'vue'

// let names = {
//             "camera": "Camera",
//             "nook-miles": "Nook Miles+",
//             "critterpedia": "Critterpedia",
//             "diy": "DIY Recipes",
//             "design": "Custom Designs",
//             "map": "Map",
//             "chat": "Chat Log",
//             "passport": "Passport",
//             "best-friends": "Best Friends List"
//         };

//         $(".app-icon").on({
//             mouseenter: function () {
//                 $(".title").text(names[$(this).attr("id")]);
//             },
//             mouseleave: function () {
//                 $(".title").text("NookPhone");
//             }
//         });

    const time = ref('loading')
    function updateTime() {
        let date = new Date();
        time.value = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    }
    updateTime();
    setInterval(updateTime, 500);
</script>

<template>
<div class="phone-holder">
        <div class="phone">
            <div class="status-bar">
                <div class="status-icon">
                    <img class="status-icon-image" src="../assets/images/cellular_status.png">
                </div>
                <div class="time">
                    {{ time }}
                </div>
                <div class="status-icon">
                    <img class="status-icon-image" src="../assets/images/location_status.png">
                </div>
            </div>
            <div class="title">
                NookPhone
            </div>
            <div class="app-grid">
                <div id="camera" class="app-icon">
                    <img class="app-icon-image" src="../assets/images/camera_icon.png">
                </div>
                <div id="nook-miles" class="app-icon">
                    <img class="app-icon-image" src="../assets/images/nook_miles_icon.png">
                </div>
                <div id="critterpedia" class="app-icon">
                    <img class="app-icon-image" src="../assets/images/critterpedia_icon.png">
                </div>
                <div id="diy" class="app-icon">
                    <img class="app-icon-image" src="../assets/images/diy_icon.png">
                </div>
                <div id="design" class="app-icon">
                    <img class="app-icon-image" src="../assets/images/design_icon.png">
                </div>
                <div id="map" class="app-icon">
                    <img class="app-icon-image" src="../assets/images/map_icon.png">
                </div>
                <div id="chat" class="app-icon">
                    <img class="app-icon-image" src="../assets/images/chat_icon.png">
                </div>
                <div id="passport" class="app-icon">
                    <img class="app-icon-image" src="../assets/images/passport_icon.png">
                </div>
                <div id="best-friends" class="app-icon">
                    <img class="app-icon-image" src="../assets/images/best_friends_icon.png">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.phone-holder {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.phone {
    width: 400px;
    height: 600px;
    background: #fdf8e3;
    border-radius: 110px;
    display: flex;
    flex-direction: column;
    box-shadow: 5px 10px 10px rgba(0,0,0,0.1);
}

.status-bar {
    height: 30px;
    margin-top: 30px;
    padding-left: 60px;
    padding-right: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: "Varela Round", sans-serif;
    font-size: 22px;
    font-weight: bold;
    color: #E0DACA;
}

.status-icon {
    width: 55px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.status-icon-image {
    height: 22px;
    image-rendering: optimizeSpeed;             /* STOP SMOOTHING, GIVE ME SPEED  */
    image-rendering: -moz-crisp-edges;          /* Firefox                        */
    image-rendering: -o-crisp-edges;            /* Opera                          */
    image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
    image-rendering: pixelated; /* Chrome */
    image-rendering: optimize-contrast;         /* CSS3 Proposed                  */
    -ms-interpolation-mode: nearest-neighbor;   /* IE8+                           */
}

.title {
    text-align: center;
	color: #807256;
    font-family: "Varela Round", sans-serif;
    font-size: 35px;
    font-weight: bold;
    margin-top: 30px;
}

.app-grid {
    height: 340px;
    margin-top: 25px;
    margin-left: 45px;
    margin-right: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* background: red; */

}

.app-icon {
    width: 98px;
    height: 98px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* background: grey; */
}

.app-icon-image {
    width: 98px;
    height: 98px;
    transition: transform .15s;
}

.app-icon-image:hover {
    transform: scale(1.15);
    /* cursor: pointer; */
}
</style>
