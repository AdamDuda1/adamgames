const d = document;

d.addEventListener('onLoad', () => {
    setup_localStorage();
});

(function setup_localStorage() {
    console.log("document is load; " + d);
})