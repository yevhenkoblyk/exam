import { MediaConverter } from "./src/SRP/refactored/MediaConverter";
import { MediaRepository } from "./src/SRP/refactored/MediaRepository";
import { Notifier } from "./src/SRP/refactored/Notifier";
import { MediaService } from "./src/SRP/refactored/MediaService";

console.log("--- DEBUG: Скрипт запустився! ---");

try {
    const converter = new MediaConverter();
    const repository = new MediaRepository();
    const notifier = new Notifier();
    const mediaManager = new MediaService(converter, repository, notifier);

    console.log("--- DEBUG: Об'єкти створено, викликаю process ---");
    mediaManager.process("vacation.raw");
    
    console.log("--- DEBUG: Успішно завершено! ---");
} catch (e) {
    console.log("--- DEBUG: Помилка при виконанні: ---", e);
}