import "reflect-metadata";

export const graphqlClassMetadataKey = "graphqlObject";
export const graphqlPropertyMetadataKey = "graphqlProperties";
export const graphqlComplexPropertyMetadataKey = "graphqlComplexProperties";
export const graphqlComplexListPropertyMetadataKey = "graphqlComplexListProperties";
export const graphqlIdPropertyMetadataKey = "graphqlIdProperty";

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

export const QlComplexListField = (qlName?: string, ensureCamelCase: boolean = true): PropertyDecorator => {
  return (target, property) => {
    const metadata: {field: string, type: string}[] = Reflect.getMetadata(graphqlComplexListPropertyMetadataKey, target) || [];
    if(ensureCamelCase)
    {
      property = camelCase(property as string);
    }
    metadata.push({field:qlName ?? property as string, type: typeof((target as any)[property])});
    Reflect.defineMetadata(graphqlComplexListPropertyMetadataKey, metadata, target);
  };
};

export const QlComplexField = (foreignKey: string, qlName?: string, ensureCamelCase: boolean = true): PropertyDecorator => {
  return (target, property) => {
    const metadata: {field: string, type: string, foreignKey: string}[] = Reflect.getMetadata(graphqlComplexPropertyMetadataKey, target) || [];
    if(ensureCamelCase)
    {
      property = camelCase(property as string);
    }
    metadata.push({field:qlName ?? property as string, type: typeof((target as any)[property]), foreignKey: foreignKey});
    Reflect.defineMetadata(graphqlComplexPropertyMetadataKey, metadata, target);
  };
};

export const QlIdField = (qlName?: string, ensureCamelCase: boolean = true): PropertyDecorator => {
  return (target, property) => {
    if(ensureCamelCase)
    {
      property = camelCase(property as string);
    }
    Reflect.defineMetadata(graphqlIdPropertyMetadataKey, qlName ?? property, target);
  };
};

export const QlType = (qlName?: string, ensureCamelCase: boolean = true): PropertyDecorator => {
  return (target, property) => {
    if(ensureCamelCase)
    {
      property = camelCase(property as string);
    }
    Reflect.defineMetadata(graphqlClassMetadataKey, qlName ?? property, target);
  };
};