<script setup lang="ts">
import { ref } from 'vue'

import CameraIcon from '../assets/images/camera_icon.png'
import NookMilesIcon from '../assets/images/nook_miles_icon.png'
import CritterIcon from '../assets/images/critterpedia_icon.png'

import DiyIcon from '../assets/images/diy_icon.png'
import DesignIcon from '../assets/images/design_icon.png'
import MapIcon from '../assets/images/map_icon.png'

import ChatIcon from '../assets/images/chat_icon.png'
import PassportIcon from '../assets/images/passport_icon.png'
import BestFriendsIcon from '../assets/images/best_friends_icon.png'

import { useToast } from '@/components/ui/toast/use-toast'
const { toast } = useToast()

import { useRouter } from 'vue-router'
const router = useRouter()


interface Item {
    display: string;
    image: string;
    id: string;
}

const phoneItems: Item[] = [
    {display: 'Camera', image: CameraIcon, id: 'camera'},
    {display: 'Nook Miles+', image: NookMilesIcon, id: 'nook-miles'},
    {display: 'Critterpedia', image: CritterIcon, id: 'critterpedia'},
    {display: 'DIY Recipes', image: DiyIcon, id: 'diy'},
    {display: 'Custom Designs', image: DesignIcon, id: 'design'},
    {display: 'Map', image: MapIcon, id: 'map'},
    {display: 'Chat Log', image: ChatIcon, id: 'chat'},
    {display: 'Passport', image: PassportIcon, id: 'passport'},
    {display: 'Best Friends List', image: BestFriendsIcon, id: 'best-friends'},
]

const time = ref('loading')
function updateTime() {
    let date = new Date();
    time.value = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}
updateTime();
setInterval(updateTime, 500);

const defaultDisplay = 'NookPhone';
const activeId = ref(defaultDisplay);

function handleClick(id: string) {
    if (id === 'design') {
        router.push('/bm')
    }
    else {
        toast({
            title: '你看，又急',
            description: '你急你🐎呢'
        });
    }
}

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
                {{ activeId }}
            </div>
            <div class="app-grid">
                <div :id="item.id" :key="item.id" class="app-icon" v-for="item in phoneItems" @mouseenter="activeId = item.display" @mouseleave="activeId = defaultDisplay" @click="() => handleClick(item.id)">
                    <img class="app-icon-image" :src="item.image">
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
    cursor: pointer;
}

.app-icon-image:hover {
    transform: scale(1.15);
    /* cursor: pointer; */
}
</style>
