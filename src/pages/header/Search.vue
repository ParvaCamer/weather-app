<template>
    <div class="container">
        <div class="search-box">
            <input type="text" class="search-input" name="" placeholder="Search for a city here" v-model="cityName" @keyup.enter="grabWeather">
            <span></span>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            cityName: '',
        }
    },
    methods: {
        grabWeather() {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=adf173dfdcd1a6aea78ba12651a19177`)
                .then(response => {
                    let data = response.data;
                    var newCity = {
                        lat: data.coord.lat,
                        lon: data.coord.lon
                    };
                    this.$emit('send-newCoord', newCity);
                    this.cityName = '';
                })
        }

    }
}
</script>

<style lang="scss" scoped>
.container {
    position: absolute;
    right: 0;
    top: -30px;

    .search-box {
        input[type="text"] {
            border: none;
            background: none;
            z-index: 1;
            width: 25px;
            height: 25px;
            transition: all .25s ease-in .25s;
            color: transparent;
            font-size: .75rem;
            line-height: 25px;

            &::placeholder {
                color: transparent;
            }

            &:hover {
                cursor: pointer;

                &:focus {
                    cursor: text;
                }

                +span {
                    background: rgba(255, 255, 255, 0.2);
                }
            }

            &:focus {
                width: 200px;
                padding: 0 10px;
                outline: none;
                color: black;
                background: none;
                color: #304d6d;

                &::placeholder {
                    color: #304d6d;
                }

                +span {
                    width: 200px;

                    &::before {
                        width: 2px;
                        opacity: 0;
                        transition: all .25s ease-in;
                    }
                }
            }

            +span {
                z-index: -1;
                position: absolute;
                border: 2px solid white;
                top: 0;
                width: 20px;
                height: 20px;
                transition: all .25s ease-in .25s;
                border-radius: 25px;
                left: 0;

                &::before {
                    transition: all .25s ease-in .5s;
                    transform-origin: left top;
                    content: '';
                    position: absolute;
                    width: 10px;
                    height: 5px;
                    border-radius: 5px;
                    background: white;
                    transform: rotate(45deg) translate(26px, -2px);
                }
            }
        }
    }
}
</style>