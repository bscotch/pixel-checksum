import { createRequire } from 'node:module';
import os from 'node:os';

const require = createRequire(import.meta.url);
const platform = os.platform();

console.log('PLATFORM', platform);

const nativeModule = require(`./pixel-checksum.${platform}.node`);
export const { computePngChecksum, computePngChecksums } = nativeModule;
