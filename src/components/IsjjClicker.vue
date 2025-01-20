<template>
    <div>
        <button @click="count++">Incr</button>
    </div>
</template>
  
<script lang="ts" setup>
import { db } from '../db';
import { computed, ref, watch } from 'vue';

let id: number | undefined;
try {
    id = await db.counters.add({
        count: 0,
    });
} catch (e) {
    console.error(e);
}
const count = ref(0);

watch(() => count, () => {
    if (id !== undefined) {
        db.counters.update(id, (counter, _ctx) => {
            counter.count += 1;
        })
    }
    console.log("Counter value changed");
});

</script>

  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
margin: 40px 0 0;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #42b983;
}
</style>
