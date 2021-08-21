const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select a media stream, pass to video element, then play
async function selectMediaScreen() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
  }
}

button.addEventListener('click', async () => {
  // Disable Button
  button.disalbed = true;
  // Start Picture in picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = true;
});

// On Load
selectMediaScreen();
