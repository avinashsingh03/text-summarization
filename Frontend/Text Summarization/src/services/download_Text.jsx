import markdownit from 'markdown-it';
import html2pdf from 'html2pdf.js';

const handleDownloadPDF = (markdownText) => {
  const md = new markdownit();
  const htmlContent = md.render(markdownText); // 1. Convert MD string to HTML string

  // 2. Create a temporary container for styling
  const element = document.createElement('div');
  element.innerHTML = htmlContent;
  element.style.padding = '20px';
  element.style.fontFamily = 'Arial, sans-serif';

  // 3. Set PDF options
  const options = {
    margin: 1,
    filename: 'summary.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 }, // Improves text quality
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  // 4. Generate and save
  html2pdf().set(options).from(element).save();
};

export default handleDownloadPDF;
