// Loaded via <script> tag, create shortcut to access PDF.js exports.
var { pdfjsLib } = globalThis;

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.mjs';

function loadpdfp1(filelocation, canvasid) {
    console.log('Attempting PDF Load');
    var loadingTask = pdfjsLib.getDocument(filelocation);
    loadingTask.promise.then(function(pdf) {
        console.log('Pdf Loaded');

        //Fetch the page
        pdf.getPage(1).then(function(page) {
            console.log('Page loaded');

            var scale = 3.0;
            var viewport = page.getViewport({ scale: scale });

            var canvas = document.getElementById(canvasid);
            var context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            var style = getComputedStyle(canvas);
            console.log();

            var renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            var renderTask = page.render(renderContext);
            renderTask.promise.then(function() {
                console.log('Page Rendered');
            });
        });
    }, function(reason) {
        //PDF Loading Error
        console.error(reason);
    });
}
loadpdfp1('Resume.pdf', 'OPResume');