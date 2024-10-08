import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        contentor: 'experience/contentor.html',
        paytm: 'experience/paytm.html',
        olaElectric: 'experience/ola-electric.html',
        rapyuta: 'experience/rapyuta.html',
        greyorange: 'experience/greyorange.html',
        emc: 'experience/emc.html',
        quantumSecure: 'experience/quantum-secure.html'
      }
    }
  },
  publicDir: 'assets'
})