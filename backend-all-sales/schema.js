class SchemaBuilder {
  // ...
  buildSchema() {
    const build = this.createBuild()
    return build.newWithHooks(GraphQLSchema, {}, { isSchema: true });
  }
}
