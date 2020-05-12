export class RomanianLocation{
  public title: string;
  public image: HTMLImageElement;
  public description: string;
  public category: string;

  constructor(title: string, image: HTMLImageElement, description: string, category: string) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.category = category;
  }
}
