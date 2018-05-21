const path = require('path');
const fs = require('fs');
module.exports = () => {
  return {
    visitor: {
      ImportDeclaration({ hub, node }) {
        const { filename, sourceFileName } = hub.file.opts;
        if (sourceFileName.startsWith('node_modules'))
          return;
        const { value } = node.source;
        if (!(value.startsWith('./') || value.startsWith('../')))
          return;
        const imext = `.${process.env.IMEXT || ''}`;
        if (imext.length < 2) return;
        const dir = path.dirname(filename);
        if (['', '.js', '.ts', '.jsx', '.tsx'].find(
          jsext => fs.existsSync(path.resolve(dir, value + imext + jsext))
        )) node.source.value = value + imext;
      }
    }
  }
};
