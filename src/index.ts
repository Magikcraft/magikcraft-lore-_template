
import { ICanon } from 'magikcraft.io';

const sendMessage = (canon: ICanon) => (msg: string) => {
    canon.sender.sendMessage(msg);
}


export const _lore =
{
    namespace: 'your_name',
    loreToLoad: [
        {
            name: 'sendMessage',
            code: sendMessage,
            cost: 0
        }
    ]
};
