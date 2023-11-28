import "reflect-metadata";

export const graphqlClassMetadataKey = "graphqlObject";
export const graphqlPropertyMetadataKey = "graphqlProperties";

function camelCase(string: string): string{
  return string[0].toLocaleLowerCase() + string.slice(1);
  }

export const QlField = (qlName?: string, ensureCamelCase: boolean = true): PropertyDecorator => {
  return (target, property) => {
    const metadata: string[] = Reflect.getMetadata(graphqlPropertyMetadataKey, target) || [];
    if(ensureCamelCase)
    {
      property = camelCase(property as string);
    }
    metadata.push(qlName ?? property as string);
    Reflect.defineMetadata(graphqlPropertyMetadataKey, metadata, target);
  };
};