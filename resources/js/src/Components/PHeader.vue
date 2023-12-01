<template>
    <header class="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky">
        <div class="container px-3">
            <router-link :to="{name: 'home'}" style="cursor: pointer;" class="navbar-brand pe-3">
                <img src="assets/img/logo.svg" width="47" alt="Silicon">
                Silicon
            </router-link>
            <div id="navbarNav" class="offcanvas offcanvas-end bg-dark">
                <div class="offcanvas-header border-bottom border-light">
                    <h5 class="offcanvas-title text-white">Menu</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase">
                        <li class="nav-item" style="cursor: pointer;">
                            <a  class="nav-link">Server list</a>
                        </li>
                        <li class="nav-item">
                            <a  class="nav-link">Reseller program</a>
                        </li>
                        <li class="nav-item">
                            <a  class="nav-link">API docs</a>
                        </li>
                        <li class="nav-item">
                            <a  class="nav-link">Download</a>
                        </li>
                    </ul>
                </div>
                <div class="offcanvas-header border-top border-light">
                    <router-link :to="{name: 'auth.login'}" class="btn btn-primary w-100 text-uppercase">
                        Sign in
                    </router-link>
                </div>
            </div>

            <button type="button" class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <router-link :to="{name: 'auth.login'}"  class="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex text-uppercase">
                Sign in
            </router-link>

        </div>
    </header>

</template>

<script setup>

</script>
