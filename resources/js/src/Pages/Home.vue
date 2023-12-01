<template>

    <section class="position-relative d-flex align-items-center min-vh-100 py-5 bg-dark overflow-hidden">
        <span class="position-absolute top-0 start-0 d-dark-mode-block d-none w-100 h-100 bg-secondary opacity-75"></span>
        <div class="container position-relative mt-5 mb-lg-5 mb-md-4 mb-3 pt-3 pb-xl-3" data-bs-theme="dark">
            <div class="row gy-5">
                <div class="col-xl-5 col-lg-6">
                    <div class="position-relative zindex-5 text-lg-start text-center">
                        <h1 class="display-1 mb-4 pb-lg-3 pb-md-2">Protect yourself with a <span class="text-gradient-primary">VPN</span></h1>
                        <p class="mb-4 pb-lg-3 pb-md-2">
                            <span class="me-2 text-light">Is maximum online anonymity and access to restricted resources important to you?</span>
                        </p>
                        <router-link :to="{name: 'auth.register'}"  class="btn btn-lg btn-primary text-uppercase w-50">Get a free VPN</router-link>
                    </div>
                </div>
                <div class="col-lg-6 offset-xl-1">
                    <div class="position-relative ms-xl-0 ms-lg-4">
                        <div class="position-absolute top-50 start-50 translate-middle ratio ratio-1x1" style="width: 125%; max-width: 49.75rem;">
                            <div class="p-md-0 p-5">
                                <img src="assets/img/landing/software-agency-3/hero-bg.png" alt="Shape" class="hero-animation-spin p-md-0 p-5">
                            </div>
                        </div>
                        <div class="position-relative row row-cols-sm-2 row-cols-1 gx-xl-4 gx-lg-3 gx-md-4 gx-3">
                            <div class="col">
                                <div class="d-sm-grid d-flex gap-xl-4 gap-lg-3 gap-md-4 gap-sm-3 gap-2">
                                    <div class="d-flex align-items-center justify-content-center bg-secondary rounded-3" style="min-height: 176px; backdrop-filter: blur(6px);">
                                        <div class="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                                            <span class="hero-animation-fade text-white">Secure Access to the Internet</span>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-center bg-secondary rounded-3" style="min-height: 176px; backdrop-filter: blur(6px);">
                                        <div class="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                                            <span class="hero-animation-fade hero-animation-delay-2 text-white">Reliable Infrastructure</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mt-sm-5 mt-2 pt-sm-5">
                                <div class="d-sm-grid d-flex gap-xl-4 gap-lg-3 gap-md-4 gap-sm-3 gap-2">
                                    <div class="d-flex align-items-center justify-content-center bg-secondary rounded-3" style="min-height: 176px; backdrop-filter: blur(6px);">
                                        <div class="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                                            <span class="hero-animation-fade hero-animation-delay-1 text-white">High-speed servers</span>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-center bg-secondary rounded-3" style="min-height: 176px; backdrop-filter: blur(6px);">
                                        <div class="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                                            <span class="hero-animation-fade hero-animation-delay-3 text-white">Based on Outline</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    components: {},
    setup(){

    }
});
</script>

