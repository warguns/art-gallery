import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import * as YAML from 'yamljs';
const openApiDocumentation = YAML.load('./src/apps/art/backend/openapi/openapi.yaml');
export const register = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));
};
