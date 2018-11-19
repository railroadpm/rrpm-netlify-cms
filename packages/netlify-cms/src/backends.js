import cms from '@rrpm/netlify-cms-core/src';
import { GitHubBackend } from '@rrpm/netlify-cms-backend-github/src';
import { GitLabBackend } from '@rrpm/netlify-cms-backend-gitlab/src';
import { GitGatewayBackend } from '@rrpm/netlify-cms-backend-git-gateway/src';
import { BitbucketBackend } from '@rrpm/netlify-cms-backend-bitbucket/src';
import { TestBackend } from '@rrpm/netlify-cms-backend-test/src';

const { registerBackend } = cms;

registerBackend('git-gateway', GitGatewayBackend);
registerBackend('github', GitHubBackend);
registerBackend('gitlab', GitLabBackend);
registerBackend('bitbucket', BitbucketBackend);
registerBackend('test-repo', TestBackend);
