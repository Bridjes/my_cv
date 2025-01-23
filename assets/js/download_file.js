function downloadWordFile() {
    const fileName = 'assets/documents/Murzhyn_Ilya.pdf'; // Путь к файлу относительно HTML-файла
    const link = document.createElement('a');
    link.href = fileName;
    link.download = `${fileName}`; // Имя, под которым файл будет сохранен

    // Добавляем элемент в DOM
    document.body.appendChild(link);

    // Имитируем клик по ссылке
    link.click();

    // Удаляем элемент из DOM
    document.body.removeChild(link);
}