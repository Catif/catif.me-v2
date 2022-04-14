<script>
export default {
    props: {
        title_primary: {
            type: String,
            required: true
        },
        title_secondary: {
            type: String
        },
        image: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <a class="box" :href="'/projects/' + url">
        <div class="title">
            <div>{{ title_primary }}</div>
            <div v-if="title_secondary != ''">{{ title_secondary }}</div>
        </div>
        <img :src="'/src/assets/img/projects/' + image">
    </a>
</template>