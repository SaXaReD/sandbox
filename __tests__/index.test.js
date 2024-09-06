import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import reverse from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('reverse', () => {
  const text = readFile('data.txt').trim();
  const result = readFile('result.txt').trim();

  expect(reverse(text)).toEqual(result);
});