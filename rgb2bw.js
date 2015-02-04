function rgb2bw(rgbpixels) {
    var bwpixels = new Array(rgbpixels.length);
    for (var i = 0; i < rgbpixels.length; ++i) {
        var r = rgbpixels[i * 4 + 0] / 255.0;
        var g = rgbpixels[i * 4 + 1] / 255.0;
        var b = rgbpixels[i * 4 + 2] / 255.0;
        bwpixels[i] = (77.0 / 256.0) * r + (150.0 / 256.0) * g + (29.0 / 256.0) * b;
    }
    return bwpixels;
}
