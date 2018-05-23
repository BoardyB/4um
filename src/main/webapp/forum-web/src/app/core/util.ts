export function deserializeFromList(list: any[], type: any): any[] {
  const parsedObjects: any = [];
  for (const obj of list) {
    parsedObjects.push(type.deserialize(obj));
  }
  return parsedObjects;
}
