export class MediaConverter {
    convert(file: string): string {
        console.log("1. Конвертуємо файл..."); // ЦЕЙ РЯДОК МАЄ БУТИ
        return file.replace(".raw", ".mp4");
    }
}