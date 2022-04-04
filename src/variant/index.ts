export type StrictMorphVariant<T> = T extends number ? `${T}` | T : T extends 'true' ? true | T : T extends 'false' ? false | T : T
export type MorphVariant<T> = T extends number ? `${T}` | T : T extends 'true' ? boolean | T : T extends 'false' ? boolean | T : T extends `${number}` ? number | T : T
