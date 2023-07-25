import * as UIExtension from './@foxitsoftware/foxit-pdf-sdk-for-web-library-full/lib/UIExtension.full.js';

const pdfui = new UIExtension.PDFUI({
    viewerOptions: {
        libPath: './@foxitsoftware/foxit-pdf-sdk-for-web-library-full/lib',
        jr: {
            licenseKey: "xxx",
            licenseSN: "xxx",
            enginePath: './@foxitsoftware/foxit-pdf-sdk-for-web-library-full/lib/jr-engine/gsdk',
            fontPath: 'http://webpdf.foxitsoftware.com/webfonts/'
        }
    },
    renderTo: '#pdf-ui',
});

