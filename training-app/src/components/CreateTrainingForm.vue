<script setup>
import { inject, ref } from 'vue';
import { trainingsSaveTraining, editTrainingPhoto, getTrainings, trainingsEditTraining } from '../services/trainings';
import { loadImage } from '../services/storage';
import BaseButton from './BaseButton.vue';
import BaseInput from './BaseInput.vue';
import Baselabel from './BaseLabel.vue';
import BaseTextarea from './BaseTextarea.vue';
import { notificationKey } from '../symbols/symbols';
import CancelButton from './CancelButton.vue';

const emit = defineEmits(['cancelTrainingForm', 'saveTraining', 'update-trainings']);

const { notification, setNotification } = inject(notificationKey);

const trainingsLoading = ref(false);
const showingTrainingForm = ref(false);
const training = ref({
    name: '',
    img: '',
    description: '',
    coach: '',
    price: 0,
    difficulty: '',
});

const photoData = ref({
    file: null,
    preview: null,
});


function handlePhotoFileChange(event) {
    photoData.value.file = event.target.files[0];
    loadImage(photoData.value.file, 'img', training.value);
}

async function saveTraining() {
    try {
        trainingsLoading.value = true;

        const newTrainingRef = await trainingsSaveTraining({
            name: training.value.name,
            img: '',
            description: training.value.description,
            coach: training.value.coach,
            price: training.value.price,
            difficulty: training.value.difficulty,
        });

        // Obtiene el ID del nuevo entrenamiento
        const newTrainingId = newTrainingRef.id;

        // Sube la imagen al Storage utilizando el ID del entrenamiento
        const imageUrl = await editTrainingPhoto(photoData.value.file, newTrainingId);

        // Actualiza el campo 'img' del entrenamiento con la URL de la imagen
        await trainingsEditTraining(newTrainingId, { img: imageUrl });

        const trainingsAll = await getTrainings();
        emit('update-trainings', trainingsAll);

        training.value.name = '';
        training.value.description = '';
        training.value.coach = '';
        training.value.price = 0;
        training.value.difficulty = '';
        trainingsLoading.value = false;
        showingTrainingForm.value = false;

        emit('saveTraining');

        setNotification({
            message: 'Entrenamiento creado con éxito.',
            type: 'success'
        });
        setTimeout(() => {
            setNotification(null);
        }, 3000);

    } catch (error) {
        console.error('Error al guardar el entrenamiento:', error);

        setNotification({
            message: 'Hubo un error al crear el entrenamiento. Por favor, intentá nuevamente mas tarde.',
            type: 'success'
        });
        setTimeout(() => {
            setNotification(null);
        }, 3000);
    }
}

function cancelTrainingForm() {
    showingTrainingForm.value = false;
    emit('cancelTrainingForm');
}
</script>

<template>
    <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div class="bg-white p-6 shadow-md rounded-lg max-w-xxl">
            <h2 class="mt-4">Cargar un nuevo entrenamiento</h2>
            <form action="#" @submit.prevent="saveTraining">
                <div class="w-auto">
                    <section class="flex flex-wrap">
                        <div class="m-3 flex-auto w-64">
                            <BaseLabel for="name" class="text-sm">Nombre: </BaseLabel>
                            <div class="mt-2">
                                <BaseInput id="name" v-model="training.name" class="shadow" required />
                            </div>
                        </div>
                        <div class="m-3 flex-auto w-64">
                            <BaseLabel for="newPhoto">Imagen</BaseLabel>
                            <input class="w-full px-1.5 py-1 border border-gray-400 rounded disabled:bg-gray-100"
                                type="file" id="newPhoto" :disabled="editLoading" @change="handlePhotoFileChange" />
                        </div>
                    </section>
                    <div class="m-3">
                        <BaseLabel for="description" class="text-sm">Descripción: </BaseLabel>
                        <div class="mt-2">
                            <BaseTextarea id="description" v-model="training.description" class="shadow" rows="4" required
                                placeholder="Escribe la descripción del entrenamiento..." />
                        </div>
                    </div>
                    <section class="flex flex-wrap">
                        <div class="m-3 flex-auto">
                            <BaseLabel for="coach" class="text-sm">Coach: </BaseLabel>
                            <div class="mt-2">
                                <BaseInput id="coach" v-model="training.coach" class="shadow" required />
                            </div>
                        </div>
                        <div class="m-3 flex-auto">
                            <BaseLabel for="price" class="text-sm">Precio: $</BaseLabel>
                            <div class="mt-2">
                                <BaseInput type="number" id="price" v-model="training.price" class="shadow" required />
                            </div>
                        </div>
                        <div class="m-3 flex-auto">
                            <Baselabel for="difficulty" class="text-sm">Dificultad: </Baselabel>
                            <div class="mt-2">
                                <BaseInput id="difficulty" v-model="training.difficulty" class="shadow" required />
                            </div>
                        </div>
                    </section>
                </div>
                <div class="flex justify-between">
                    <CancelButton @click="cancelTrainingForm">Cancelar</CancelButton>
                    <BaseButton class="rounded-full p-3 ml-2" :loading="trainingsLoading"></BaseButton>
                </div>
            </form>
        </div>
    </div>
</template>