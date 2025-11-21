"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToWeChatHtml = convertToWeChatHtml;
const markdown_it_1 = __importDefault(require("markdown-it"));
function convertToWeChatHtml(markdown, theme) {
    const md = new markdown_it_1.default({
        html: true,
        breaks: true,
        linkify: true
    });
    // Helper to add style to tokens
    const addStyle = (tokens, idx, style) => {
        if (!style)
            return;
        const token = tokens[idx];
        const existingStyle = token.attrGet('style') || '';
        const newStyle = existingStyle ? `${existingStyle} ${style}` : style;
        token.attrSet('style', newStyle);
    };
    // Override render rules to inject styles
    const rules = {
        heading_open: (tokens, idx, options, env, self) => {
            const tag = tokens[idx].tag; // h1, h2, ...
            const style = theme.styles[tag];
            addStyle(tokens, idx, style);
            // Handle prefixes if any
            if (tag === 'h1' && theme.h1Prefix)
                return `<${tag} style="${style}">${theme.h1Prefix}`;
            if (tag === 'h2' && theme.h2Prefix)
                return `<${tag} style="${style}">${theme.h2Prefix}`;
            if (tag === 'h3' && theme.h3Prefix)
                return `<${tag} style="${style}">${theme.h3Prefix}`;
            return self.renderToken(tokens, idx, options);
        },
        heading_close: (tokens, idx, options, env, self) => {
            const tag = tokens[idx].tag;
            // Handle suffixes if any
            if (tag === 'h1' && theme.h1Suffix)
                return `${theme.h1Suffix}</${tag}>\n`;
            if (tag === 'h2' && theme.h2Suffix)
                return `${theme.h2Suffix}</${tag}>\n`;
            if (tag === 'h3' && theme.h3Suffix)
                return `${theme.h3Suffix}</${tag}>\n`;
            return self.renderToken(tokens, idx, options);
        },
        paragraph_open: (tokens, idx, options, env, self) => {
            addStyle(tokens, idx, theme.styles.p);
            return self.renderToken(tokens, idx, options);
        },
        blockquote_open: (tokens, idx, options, env, self) => {
            addStyle(tokens, idx, theme.styles.blockquote);
            return self.renderToken(tokens, idx, options);
        },
        bullet_list_open: (tokens, idx, options, env, self) => {
            addStyle(tokens, idx, theme.styles.ul);
            return self.renderToken(tokens, idx, options);
        },
        ordered_list_open: (tokens, idx, options, env, self) => {
            addStyle(tokens, idx, theme.styles.ol);
            return self.renderToken(tokens, idx, options);
        },
        list_item_open: (tokens, idx, options, env, self) => {
            addStyle(tokens, idx, theme.styles.li);
            return self.renderToken(tokens, idx, options);
        },
        link_open: (tokens, idx, options, env, self) => {
            addStyle(tokens, idx, theme.styles.link);
            return self.renderToken(tokens, idx, options);
        },
        image: (tokens, idx, options, env, self) => {
            addStyle(tokens, idx, theme.styles.image);
            return self.renderToken(tokens, idx, options);
        },
        code_inline: (tokens, idx, options, env, self) => {
            // code_inline is a self-closing token type usually rendered directly
            // We need to wrap it in a span with style
            const token = tokens[idx];
            const style = theme.styles.code || theme.styles.inlineCode;
            return `<code style="${style}">${md.utils.escapeHtml(token.content)}</code>`;
        },
        hr: (tokens, idx, options, env, self) => {
            addStyle(tokens, idx, theme.styles.hr);
            return self.renderToken(tokens, idx, options);
        }
    };
    // Apply rules
    Object.assign(md.renderer.rules, rules);
    // Custom rule for strong/bold since it's inline
    // Note: markdown-it handles inline tokens differently. We might need to walk the inline tokens.
    // However, a simpler way for strong is to just use a simple replace or extend the renderer if possible.
    // But 'strong_open' is a valid rule.
    md.renderer.rules.strong_open = (tokens, idx, options, env, self) => {
        addStyle(tokens, idx, theme.styles.strong);
        return self.renderToken(tokens, idx, options);
    };
    const html = md.render(markdown);
    // Wrap in the main section
    const sectionStyle = theme.styles.section || '';
    return `<section id="nice" style="${sectionStyle}">
${html}
</section>`;
}
