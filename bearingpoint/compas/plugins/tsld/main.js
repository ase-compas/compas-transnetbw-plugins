const Module = require("module");
const path = require("path");
const fs = require("fs");
const originalResolveFilename = Module._resolveFilename;
const distPath = __dirname;
const manifest = [{ "module": "@oscd-transnet-plugins/oscd-archive-explorer", "exactMatch": "libs/oscd-archive-explorer/src/index.js", "pattern": "libs/oscd-archive-explorer/src/index.ts" }, { "module": "@oscd-transnet-plugins/oscd-archiving-api-client", "exactMatch": "libs/oscd-archiving-api-client/src/index.js", "pattern": "libs/oscd-archiving-api-client/src/index.ts" }, { "module": "@oscd-transnet-plugins/oscd-component", "exactMatch": "libs/oscd-component/src/index.js", "pattern": "libs/oscd-component/src/index.ts" }, { "module": "@oscd-transnet-plugins/oscd-history-api-client", "exactMatch": "libs/oscd-history-api-client/src/index.js", "pattern": "libs/oscd-history-api-client/src/index.ts" }, { "module": "@oscd-transnet-plugins/oscd-history-viewer", "exactMatch": "libs/oscd-history-viewer/src/index.js", "pattern": "libs/oscd-history-viewer/src/index.ts" }, { "module": "@oscd-transnet-plugins/oscd-icons", "exactMatch": "libs/oscd-icons/src/index.js", "pattern": "libs/oscd-icons/src/index.ts" }, { "module": "@oscd-transnet-plugins/oscd-location-manager", "exactMatch": "libs/oscd-location-manager/src/index.js", "pattern": "libs/oscd-location-manager/src/index.ts" }, { "module": "@oscd-transnet-plugins/oscd-location-viewer", "exactMatch": "libs/oscd-location-viewer/src/index.js", "pattern": "libs/oscd-location-viewer/src/index.ts" }];
Module._resolveFilename = function(request, parent) {
  let found;
  for (const entry of manifest) {
    if (request === entry.module && entry.exactMatch) {
      const entry2 = manifest.find((x) => request === x.module || request.startsWith(x.module + "/"));
      const candidate = path.join(distPath, entry2.exactMatch);
      if (isFile(candidate)) {
        found = candidate;
        break;
      }
    } else {
      const re = new RegExp(entry.module.replace(/\*$/, "(?<rest>.*)"));
      const match = request.match(re);
      if (match?.groups) {
        const candidate = path.join(distPath, entry.pattern.replace("*", ""), match.groups.rest + ".js");
        if (isFile(candidate)) {
          found = candidate;
        }
      }
    }
  }
  if (found) {
    const modifiedArguments = [found, ...[].slice.call(arguments, 1)];
    return originalResolveFilename.apply(this, modifiedArguments);
  } else {
    return originalResolveFilename.apply(this, arguments);
  }
};
function isFile(s) {
  try {
    return fs.statSync(s).isFile();
  } catch (_e) {
    return false;
  }
}
require("./apps/tsld/src/main.js");
