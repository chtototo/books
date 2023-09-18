// addEventListener('wheel') {}
// window.scrollBy({
//     top: 1
// })
// onscroll = (event) => {
//     scrollTo(0, 1000);
// };

document.addEventListener('wheel', function(event) {
    event.preventDefault();
    event.deltaY = 0;
})

// const syntheticEvent = new WheelEvent("syntheticWheel", {
//     deltaY: 1000,
// });