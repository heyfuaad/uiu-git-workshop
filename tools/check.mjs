import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const href = html.match(/<link\s+rel="stylesheet"\s+href="([^"#?]+)"/i)?.[1];
const problems = [];
if (!/<h1>[^<]+<\/h1>/.test(html)) problems.push('Missing page heading');
if (/^(<{7}|={7}|>{7})/m.test(html)) problems.push('Unresolved merge conflict in index.html');
if (!href) problems.push('Missing stylesheet link');
else if (!fs.existsSync(path.join(root, href))) problems.push(`Missing stylesheet: ${href}`);
if (problems.length) { console.error('FAIL: ' + problems.join('; ')); process.exitCode = 1; }
else console.log('PASS: Heading, stylesheet and conflict-marker checks passed.');
// A small teaching check for this page, not a complete website test.
