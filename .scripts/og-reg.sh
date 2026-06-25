#!/usr/bin/env sh

echo "OG no-regression tests starting..."
npm run og -- http://localhost:4200/japon > .log/render-og-japan.log
npm run og -- http://localhost:4200 > .log/render-og-home.log
npm run og -- http://localhost:4200/voyages > .log/render-og-travel.log
npm run og -- http://localhost:4200/jeux-de-societe > .log/render-og-board-games.log
echo "OG no-regression tests finished."
echo "See logs .log/render-og*.log for more details."
