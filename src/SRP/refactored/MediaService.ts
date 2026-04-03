export class MediaService {
    constructor(
        private converter: any,
        private repository: any,
        private notifier: any
    ) {}

    process(fileName: string): void {
        console.log("Метод process викликано!"); // Додайте цей рядок для перевірки
        const converted = this.converter.convert(fileName);
        this.repository.save(converted);
        this.notifier.send("Готово!");
    }
}