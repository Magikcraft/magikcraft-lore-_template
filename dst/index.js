"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sendMessage = function (canon) { return function (msg) {
    canon.sender.sendMessage(msg);
}; };
exports._lore = {
    namespace: 'your_name',
    loreToLoad: [
        {
            name: 'sendMessage',
            code: sendMessage,
            cost: 0
        }
    ]
};
