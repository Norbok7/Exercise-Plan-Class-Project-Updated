export enum BodyPart {
  core = 'core',
  upper = 'upper',
  lower = 'lower',
}
export class Exercise {
  public bodypart?: BodyPart
  public name: string;
  public description: string;
  public imagePath?: string;
  public id?: number;

  constructor(bodypart?: BodyPart, name?: string, description?: string, imagePath?: string, id?: number,){
    this.bodypart = bodypart;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.id = id;
  }
}


