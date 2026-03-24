// html2pdf.js plugin wrapper for Vue
import html2pdf from 'html2pdf.js';

const Html2PdfPlugin = {
  install(app) {
    app.config.globalProperties.$html2pdf = (el, options = {}) => {
      const element = typeof el === 'string' ? document.getElementById(el) : el;
      if (!element) {
        alert(`Element to export #${el} not found!`);
        return;
      }
      html2pdf().set(options).from(element).save();
    };
  }
};

export default Html2PdfPlugin;
