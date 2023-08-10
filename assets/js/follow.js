const blob = document.getElementById("follow-blob")

document.body.onpointermove = event => {
    const { clientX, clientY } = event
    blob.style.top = `${Math.abs(document.body.getBoundingClientRect().top) + clientY}px`;
    blob.style.left = `${clientX}px`;
}