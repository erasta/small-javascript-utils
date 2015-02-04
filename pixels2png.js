function arrayToImagePngURI(uint8array, width, height) {
    var canvas = document.getElementById('canvas');
    if (!canvas) canvas = document.createElement('canvas');
    canvas.width  = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    imageData.data.set(uint8array);
    ctx.putImageData(imageData, 0, 0);
    return canvas.toDataURL();
}

function dataURItoBinaryArray(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = new Uint8Array(binary.length);
    for(var i = 0; i < binary.length; i++) {
        array[i] = binary.charCodeAt(i);
    }
    return array;
}

function pixelArrayToImagePng(uint8array, width, height) {
    var uri = arrayToImagePngURI(uint8array, width, height);
    return dataURItoBinaryArray(uri);
}
