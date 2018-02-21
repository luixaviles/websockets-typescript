import { Message } from './model/message';

export class MessageGenerator {

    WORDS: string[] = [
        'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
		'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut', 'finished'
    ];

    public generateMessage(): Message {
        return {
            date: new Date().toISOString(),
            from: 'server',
            content: this.getRandomContent()
        };
    }

    private getRandomContent(): string {
        const position = Math.floor(Math.random() * this.WORDS.length);
        return this.WORDS[position];
    }
}