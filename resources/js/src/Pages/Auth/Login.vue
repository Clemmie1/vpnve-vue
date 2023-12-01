<template>

    <section class="position-relative h-100 pt-5 pb-4">

        <!-- Sign in form -->
        <div class="container d-flex flex-wrap justify-content-center justify-content-xl-center h-100 pt-5">
            <div class="w-100 align-self-end pt-1 pt-md-4 pb-4" style="max-width: 526px;">
                <h1 class="text-center text-xl-start">Welcome Back</h1>
                <p class="text-center text-xl-start pb-3 mb-3">Don’t have an account yet? <router-link :to="{name: 'auth.register'}"  style="text-decoration: none;">Register here.</router-link> </p>
                <div>
                    <form class="needs-validation mb-2" novalidate="">
                        <div class="form-floating mb-4">
                            <input class="form-control" type="text" id="fl-text" placeholder="Username">
                            <label for="fl-text">Username</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input class="form-control" type="password" id="fl-text" placeholder="Password">
                            <label for="fl-text">Password</label>
                        </div>
                        <div class="mb-4">
                            <div class="form-check">
                                <input type="checkbox" id="remember" class="form-check-input">
                                <label for="remember" class="form-check-label fs-base">Remember me</label>
                            </div>
                        </div>
                        <button type="button" @click="notify" class="btn btn-primary shadow-primary btn-lg w-100">Sign in</button>
                    </form>
                </div>
            </div>
            <div class="w-100 align-self-center justify-content-center">
                <p class="nav d-block fs-xs text-center text-xl-start pb-2 mb-0">

                </p>
            </div>
        </div>

    </section>

</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    name: "App",
    setup() {
        const notify = () => {
            toast("Wow so easy !", {
                autoClose: 1000,
                theme: 'dark',
                type: 'success',
                transition: 'zoom',
                position: 'bottom-center'
            }); // ToastOptions
        }
        return { notify };
    }
};
</script>

<!--<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    components: {},
    setup(){

    }
});
</script>-->

