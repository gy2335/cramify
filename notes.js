async function exportPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const text = document.getElementById("notesArea").value;
  const lines = doc.splitTextToSize(text, 180);
  doc.text(lines, 15, 20);

  doc.save("notes.pdf");
}
