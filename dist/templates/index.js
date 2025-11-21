"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templates = void 0;
exports.templates = {
    default: {
        name: 'default',
        label: 'Default (Blue Tech)',
        styles: {
            section: 'font-family: Optima, "Microsoft YaHei", PingFangSC-regular, serif; font-size: 16px; color: rgb(0, 0, 0); line-height: 1.5em; word-spacing: 0em; letter-spacing: 0em; word-break: break-word; overflow-wrap: break-word; text-align: left;',
            h1: 'margin-top: 30px; margin-bottom: 15px; font-size: 20px; font-weight: bold; color: rgb(14, 136, 235); border-left: 5px solid rgb(14, 136, 235); padding-left: 10px;',
            h2: 'margin-top: 30px; margin-bottom: 15px; font-size: 18px; font-weight: bold; color: rgb(14, 136, 235); border-left: 5px solid rgb(14, 136, 235); padding-left: 10px;',
            h3: 'margin-top: 20px; margin-bottom: 10px; font-size: 16px; font-weight: bold; color: rgb(14, 136, 235);',
            p: 'font-size: 15px; line-height: 1.8em; color: rgb(0, 0, 0); margin: 10px 0;',
            blockquote: 'margin: 20px 0; padding: 10px 20px; border-left: 3px solid rgb(14, 136, 235); background: rgb(245, 245, 245); color: rgb(100, 100, 100);',
            code: 'font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace; font-size: 14px; background: rgb(245, 245, 245); padding: 2px 4px; border-radius: 4px; color: rgb(200, 50, 50);',
            ul: 'list-style-type: disc; padding-left: 20px; margin: 10px 0;',
            ol: 'list-style-type: decimal; padding-left: 20px; margin: 10px 0;',
            li: 'margin: 5px 0; font-size: 15px; line-height: 1.8em;',
            strong: 'font-weight: bold; color: rgb(14, 136, 235);',
            link: 'color: rgb(14, 136, 235); text-decoration: none; border-bottom: 1px solid rgb(14, 136, 235);',
            image: 'display: block; margin: 20px auto; max-width: 100%; border-radius: 4px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);'
        }
    },
    minimal_black: {
        name: 'minimal_black',
        label: 'Minimal Black',
        styles: {
            section: 'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 16px; color: #333; line-height: 1.6;',
            h1: 'font-size: 24px; font-weight: bold; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px; margin-top: 40px;',
            h2: 'font-size: 20px; font-weight: bold; border-left: 4px solid #000; padding-left: 10px; margin-bottom: 15px; margin-top: 30px;',
            h3: 'font-size: 18px; font-weight: bold; margin-bottom: 10px; margin-top: 20px;',
            p: 'margin-bottom: 15px; text-align: justify;',
            blockquote: 'border-left: 4px solid #000; padding-left: 15px; color: #666; font-style: italic; margin: 20px 0;',
            code: 'background: #f0f0f0; padding: 2px 5px; border-radius: 3px; font-family: monospace;',
            strong: 'font-weight: bold; color: #000;',
            link: 'color: #000; text-decoration: underline;'
        }
    },
    green_nature: {
        name: 'green_nature',
        label: 'Green Nature',
        styles: {
            section: 'font-family: "PingFang SC", system-ui; color: #2c3e50; line-height: 1.75;',
            h1: 'color: #27ae60; font-size: 22px; text-align: center; border-bottom: 1px dashed #27ae60; padding-bottom: 10px; margin: 30px 0;',
            h2: 'color: #fff; background: #27ae60; display: inline-block; padding: 5px 15px; border-radius: 20px; font-size: 18px; margin: 25px 0 15px;',
            h3: 'color: #27ae60; font-size: 16px; border-left: 3px solid #27ae60; padding-left: 8px; margin: 20px 0 10px;',
            p: 'margin: 15px 0;',
            blockquote: 'background: #eafaf1; border-left: 5px solid #27ae60; padding: 15px; color: #2c3e50; border-radius: 5px;',
            strong: 'color: #27ae60; font-weight: bold;',
            link: 'color: #27ae60; border-bottom: 1px solid #27ae60;'
        }
    },
    red_festival: {
        name: 'red_festival',
        label: 'Red Festival',
        styles: {
            section: 'font-family: serif; color: #333;',
            h1: 'color: #c0392b; font-size: 24px; text-align: center; font-weight: bold; margin: 30px 0;',
            h2: 'color: #c0392b; border-bottom: 2px solid #c0392b; display: inline-block; padding-bottom: 5px; margin: 25px 0 15px;',
            p: 'margin: 10px 0; line-height: 1.8;',
            blockquote: 'border: 1px solid #c0392b; padding: 15px; background: #fdf2f2; color: #c0392b; border-radius: 8px;',
            strong: 'color: #c0392b; font-weight: bold;',
            link: 'color: #c0392b; font-weight: bold;'
        }
    },
    purple_magic: {
        name: 'purple_magic',
        label: 'Purple Magic',
        styles: {
            section: 'font-family: sans-serif; color: #4a4a4a;',
            h1: 'color: #8e44ad; font-size: 22px; text-shadow: 1px 1px 2px rgba(142,68,173,0.2); margin: 30px 0;',
            h2: 'color: #9b59b6; border-left: 5px solid #8e44ad; padding-left: 10px; background: linear-gradient(to right, #f4ecf7, transparent); padding: 5px 10px; margin: 25px 0;',
            p: 'margin: 15px 0; line-height: 1.7;',
            blockquote: 'background: #f5eef8; border-left: 4px solid #9b59b6; padding: 10px 15px; color: #6c3483;',
            strong: 'color: #8e44ad;',
            link: 'color: #8e44ad; border-bottom: 1px dashed #8e44ad;'
        }
    },
    orange_vitality: {
        name: 'orange_vitality',
        label: 'Orange Vitality',
        styles: {
            section: 'font-family: "Microsoft YaHei", sans-serif; color: #333;',
            h1: 'color: #e67e22; font-size: 24px; border-bottom: 3px solid #e67e22; padding-bottom: 10px; margin: 30px 0;',
            h2: 'color: #d35400; font-size: 18px; background: #fce6d4; padding: 5px 10px; border-radius: 4px; display: inline-block; margin: 25px 0;',
            p: 'margin: 15px 0; line-height: 1.6;',
            blockquote: 'border-left: 4px solid #e67e22; background: #fff5e6; padding: 10px 15px; color: #d35400;',
            strong: 'color: #d35400;',
            link: 'color: #e67e22;'
        }
    },
    classic_gray: {
        name: 'classic_gray',
        label: 'Classic Gray',
        styles: {
            section: 'font-family: Georgia, serif; color: #444; line-height: 1.8;',
            h1: 'color: #2c3e50; font-size: 24px; text-align: center; border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; padding: 15px 0; margin: 30px 0;',
            h2: 'color: #34495e; font-size: 20px; font-weight: bold; margin: 25px 0 15px;',
            p: 'margin: 15px 0;',
            blockquote: 'background: #f9f9f9; border-left: 5px solid #ccc; padding: 15px; color: #666;',
            strong: 'color: #2c3e50; font-weight: bold;',
            link: 'color: #7f8c8d; border-bottom: 1px solid #7f8c8d;'
        }
    },
    pink_soft: {
        name: 'pink_soft',
        label: 'Pink Soft',
        styles: {
            section: 'font-family: "PingFang SC", sans-serif; color: #555;',
            h1: 'color: #e91e63; font-size: 22px; text-align: center; background: #fce4ec; padding: 10px; border-radius: 10px; margin: 30px 0;',
            h2: 'color: #ec407a; font-size: 18px; border-bottom: 2px solid #f8bbd0; padding-bottom: 5px; margin: 25px 0;',
            p: 'margin: 15px 0; line-height: 1.7;',
            blockquote: 'border: 1px dashed #f48fb1; background: #fce4ec; padding: 10px 15px; border-radius: 8px; color: #ad1457;',
            strong: 'color: #e91e63;',
            link: 'color: #e91e63; border-bottom: 1px dotted #e91e63;'
        }
    },
    dark_mode: {
        name: 'dark_mode',
        label: 'Dark Mode',
        styles: {
            section: 'font-family: sans-serif; color: #e0e0e0; background: #1a1a1a; padding: 20px;',
            h1: 'color: #fff; font-size: 24px; border-bottom: 1px solid #444; padding-bottom: 15px; margin: 30px 0;',
            h2: 'color: #bb86fc; font-size: 20px; margin: 25px 0;',
            p: 'margin: 15px 0; line-height: 1.6; color: #b0b0b0;',
            blockquote: 'background: #333; border-left: 4px solid #bb86fc; padding: 15px; color: #e0e0e0;',
            code: 'background: #2d2d2d; color: #ff79c6; padding: 2px 5px; border-radius: 3px;',
            strong: 'color: #03dac6;',
            link: 'color: #03dac6;'
        }
    },
    cyberpunk: {
        name: 'cyberpunk',
        label: 'Cyberpunk',
        styles: {
            section: 'font-family: "Courier New", monospace; color: #0ff; background: #050510; padding: 15px;',
            h1: 'color: #f0f; text-shadow: 2px 2px #0ff; font-size: 26px; text-transform: uppercase; margin: 30px 0;',
            h2: 'color: #ff0; border: 1px solid #0ff; padding: 5px 10px; display: inline-block; box-shadow: 3px 3px #f0f; margin: 25px 0;',
            p: 'margin: 15px 0; line-height: 1.5; color: #fff;',
            blockquote: 'border: 1px solid #f0f; background: rgba(255, 0, 255, 0.1); padding: 15px; color: #0ff;',
            strong: 'color: #ff0; text-shadow: 0 0 5px #ff0;',
            link: 'color: #f0f; text-decoration: underline;'
        }
    }
};
