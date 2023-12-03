import 'reflect-metadata';
import { graphqlPropertyMetadataKey, graphqlIdPropertyMetadataKey } from './graphql-decorators';
import { QlSelectionSet, QlSelectionSetTyped } from './ql-selection-set';

export const ensureQlFields = function<
T extends {
  new (): any;
}
>(classToCreate: T, fieldsOverride?: string[]): string
{
    return fieldsOverride?.join('\n') ?? Reflect.getMetadata(graphqlPropertyMetadataKey, new classToCreate()).join('\n');
}

export const selectQlIdField = function<
T extends {
  new (): any;
}
>(classToCreate: T): string
{
  const classId =  Reflect.getMetadata(graphqlIdPropertyMetadataKey, new classToCreate());
  return classId
}

export const selectQlIdFieldValue = function(ObjectOrObjects: object | object[]): string | string[] | number | number[]
{
  if(Array.isArray(ObjectOrObjects))
  {
    if(ObjectOrObjects.length < 1)
    {
      return []
    }
    const classId = Reflect.getMetadata(graphqlIdPropertyMetadataKey, ObjectOrObjects[0]);
    return ObjectOrObjects.map(obj=>obj[classId]);
  }
  const classId = Reflect.getMetadata(graphqlIdPropertyMetadataKey, ObjectOrObjects);
  return (ObjectOrObjects as any)[classId]
}

export const selectToQlFields = function(selectionSet?: QlSelectionSet | QlSelectionSetTyped<any, any>): string | null
{
  if(!selectionSet)
  {
    return null;
  }
  let selectionString: string = '' 
  if(selectionSet.name)
  {
    selectionString+=selectionSet.name as string;
    let argString: string = '';
    if(selectionSet.args)
    {
      let argKeys = Object.keys(selectionSet.args);
      if(argKeys.length > 0)
      {
        argString += '(';
        argKeys.forEach(arg=>
          argString += `${arg}:${selectionSet.args![arg]},`
        );
        argString.slice(argString.length - 1);
        argString += ')';
      }
    }
    selectionString+=`${argString}\n{\n`
  }
  selectionString+= selectionSet.fields.join('\n')
  if(selectionSet.subSet){
    if(selectionSet.subSet.some(sub=>!sub.name))
    {
      throw new Error("Subsets must have a name");
    }
    selectionSet.subSet.forEach(sub=>
      selectionString+=`\n${selectToQlFields(sub)}`
    );
  }
  if(selectionSet.name)
  {
    selectionString+='\n}';
  }
  return selectionString;
}