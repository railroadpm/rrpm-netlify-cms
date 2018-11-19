import cms from '@rrpm/netlify-cms-core/src';
import uploadcare from '@rrpm/netlify-cms-media-library-uploadcare/src';

const { registerMediaLibrary } = cms;

registerMediaLibrary(uploadcare);
