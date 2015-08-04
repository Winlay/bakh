cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.teamnemitoff.phonedialer/www/dialer.js",
        "id": "com.teamnemitoff.phonedialer.phonedialer",
        "merges": [
            "phonedialer"
        ]
    },
    {
        "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
        "id": "mx.ferreyra.callnumber.CallNumber",
        "clobbers": [
            "call"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.teamnemitoff.phonedialer": "0.3.0",
    "cordova-plugin-whitelist": "1.0.0",
    "mx.ferreyra.callnumber": "0.0.2"
}
// BOTTOM OF METADATA
});