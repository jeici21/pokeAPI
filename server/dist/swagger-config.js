"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'PokeAPI',
            version: '1.0.0',
            description: 'API para gestionar Pokémon',
        },
        servers: [
            {
                url: 'http://localhost:5000',
                description: 'Servidor de desarrollo',
            },
        ],
    },
    apis: ['./controllers/*.ts'],
};
const specs = (0, swagger_jsdoc_1.default)(options);
function swaggerConfig(app) {
    app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
}
exports.default = swaggerConfig;
;
