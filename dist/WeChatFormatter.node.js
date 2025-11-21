"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeChatFormatter = void 0;
const templates_1 = require("./templates");
const converter_1 = require("./utils/converter");
class WeChatFormatter {
    constructor() {
        this.description = {
            displayName: 'WeChat Formatter',
            name: 'weChatFormatter',
            icon: 'fa:weixin',
            group: ['transform'],
            version: 1,
            description: 'Converts Markdown to WeChat Official Account HTML',
            defaults: {
                name: 'WeChat Formatter',
            },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: 'Markdown Content',
                    name: 'content',
                    type: 'string',
                    default: '',
                    placeholder: 'Enter markdown content here',
                    description: 'The markdown content to convert',
                },
                {
                    displayName: 'Theme',
                    name: 'theme',
                    type: 'options',
                    options: Object.values(templates_1.templates).map(t => ({
                        name: t.label,
                        value: t.name,
                    })),
                    default: 'default',
                    description: 'Select the styling theme',
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        for (let i = 0; i < items.length; i++) {
            try {
                const content = this.getNodeParameter('content', i);
                const themeName = this.getNodeParameter('theme', i);
                const theme = templates_1.templates[themeName] || templates_1.templates['default'];
                const html = (0, converter_1.convertToWeChatHtml)(content, theme);
                returnData.push({
                    json: {
                        html,
                        theme: themeName,
                    },
                });
            }
            catch (error) {
                if (this.continueOnFail()) {
                    returnData.push({
                        json: {
                            error: error.message,
                        },
                    });
                    continue;
                }
                throw error;
            }
        }
        return [returnData];
    }
}
exports.WeChatFormatter = WeChatFormatter;
