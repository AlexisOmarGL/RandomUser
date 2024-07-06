<template>
  <div class="header">
      <h1>Random User</h1>
    </div>
  <v-container class=" fill-width">
    <v-responsive
      class="align-center fill-height"
      max-width="-webkit-fill-available"
    >
    
  <v-card class="pa-2" title="Filtros">
    <v-row>
      <v-col cols=6>
        <v-select
          :items="items"
          v-model="selectedGender"
          density="compact"
          label="Genero"
        ></v-select>
      </v-col>
      <v-col cols=6>
        <v-select
          :items="items"
          v-model="selectedNat"
          density="compact"
          label="Nacionalidad"
        ></v-select>
      </v-col>
      
      <v-col cols=12>
        <v-range-slider
          v-model="rangeSlide"
          step="1"
          thumb-label="always"
          min="18"
          max="100"
        ></v-range-slider>
      </v-col>
    </v-row>
  </v-card>

  <div>
    <v-btn @click="getRandom">
      Fetch Users
    </v-btn>
    <v-card v-if="show">
      <v-table height="300px">
        <thead>
          <tr>
            <th class="text-left">Nombre</th>
            <th class="text-left">Genero</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="us in fullname" :key="us.name">
            <td>{{ us.name }}</td>
            <td>{{ us.gen }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </div>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { getUser } from '@/api/randomUser';
import { ref } from 'vue';
interface User {
  name: string;
  gen: string;
}
const rangeSlide = ref([18, 100]);
  let items= ['Foo', 'Bar', 'Fizz', 'Buzz'];
  const selectedGender = ref(null);  
  const selectedNat=ref(null);
  const fullname =  ref<User[]>([]);
const show = ref(false);

// Define the async function
async function getRandom() {
  show.value = true;
  try {
    const response = await getUser();
    const users = response.results;
    fullname.value = users.map((element:any) => {
      const first = element.name.first;
      const second = element.name.last;
      const fn = `${first} ${second}`;
      const gen = element.gender;
      return { name: fn, gen: gen };
    });
    console.log(users);
    console.log(fullname.value);
  } catch (error) {
    console.error('Error fetching types:', error);
  }
}

</script>

<style>
.header{
  text-align:center;
  background-color:#1abc23;
}
</style>