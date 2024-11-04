import { YMap, YMapDefaultSchemeLayer } from './lib/ymaps.js'

const map = new YMap(
    document.getElementById('app'),
    {
        location: {
            center: [44.002, 56.3],
            zoom: 12
        }
    }
);

map.addChild(new YMapDefaultSchemeLayer());