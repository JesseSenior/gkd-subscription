import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 233,
  name: 'Jesse Senior的GKD订阅',
  version: 0,
  author: 'Jesse Senior',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/JesseSenior/gkd-subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
