import os from 'node:os';
import { $ } from 'zx';

$`pnpm exec cargo-cp-artifact -ac pixel-checksum pixel-checksum.${os.platform()}.node -- cargo build --message-format=json-render-diagnostics --release`;
