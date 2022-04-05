export abstract class Entity<ID> {
  private id: ID;

  public getId(): ID {
    return this.id;
  }

  public setId(id: ID): void {
    this.id = id;
  }

  public isNew(): boolean {
    return this.id === null || this.id === undefined;
  }

}
