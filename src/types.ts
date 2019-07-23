export namespace types {
  export const Unreachable = (value: never): never => { throw new Error('Should not have reached over here') }
}
