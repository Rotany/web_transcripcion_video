document.addEventListener('DOMContentLoaded', function() {
    const videoId = document.getElementById('video-id');
    const uploadProgress = document.getElementById('upload-progress');
    const transcriptionResult = document.getElementById('transcription-result');
    const transcribeBtn = document.getElementById('transcribe-btn');

    videoId.addEventListener('change', function(event) {
        const file = event.target.files[0];

        if (file) {
            const formData = new FormData();
            formData.append('video', file);

            // Mostrar el indicador de progreso
            uploadProgress.style.display = 'block';

            // Simular carga de archivo (reemplaza esto con tu lógica de carga real)
            setTimeout(() => {
                // Ocultar el indicador de progreso
                uploadProgress.style.display = 'none';
            }, 2000); // Simular carga durante 2 segundos
        }
    });

    transcribeBtn.addEventListener('click', function() {
        console.log(videoId.value)
        const update = {
            video_id: videoId.value
            };
            
            const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*"
            },
            body: JSON.stringify(update),
            };
        const endpoint = "http://localhost:5000/api/v1/transcribe"
        fetch(endpoint, options)
            .then(caca => {console.log(caca)})
            .catch(caca => {console.log(caca)})
        // Simular transcripción (reemplaza esto con tu lógica de transcripción real)
        transcriptionResult.textContent = 'Este es el texto transcribido del video.';
        transcriptionResult.style.display = 'block';
    });
});
