<template>
    <div class="content">
        <base-button @click="setSelected('detail-one-day')" :mode="oneDayButtonMode">Today</base-button>
        <base-button @click="setSelected('detail-few-days')" :mode="fewDaysButtonMode">6 days</base-button>
        <base-button id="button-search">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                viewBox="0 0 16 16">
                <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
        </base-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: 'detail-one-day',
        }
    },
    computed: {
        oneDayButtonMode() {
            return this.selected === 'detail-one-day' ? null : 'flat'
        },
        fewDaysButtonMode() {
            return this.selected === 'detail-few-days' ? null : 'flat'
        }
    },
    methods: {
        setSelected(tab) {
            this.$emit('send-tab', tab)
        },
    }
}
</script>

<style lang="scss" scoped>
.content {
    position: relative;
    margin: 15px 0 15px;
    display: flex;
    justify-content: center;
}

#button-search {
    position: absolute;
    right: 10px;
}
</style>