function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export class Message {
    private readonly messageContent: string;

    constructor(m: string) {
        this.messageContent = m;
    }

    getMessageContent(): string {
        return this.messageContent;
    }
}

export abstract class Observer {
    public readonly id: string;

    protected constructor() {
        this.id = uuid();
    }

    abstract update(m: Message);
}

export interface Observable {
    subscribe(o: Observer);

    unsubscribe(o: Observer);

    notify(m: Message);
}

export class MessagePublisher implements Observable {

    private observers: Array<Observer> = [];

    subscribe(o: Observer) {
        this.observers.push(o);
    }

    unsubscribe(o: Observer) {
        this.observers = this.observers.filter(_ => _.id !== o.id);
    }

    notify(m: Message) {
        this.observers.forEach(_ => _.update(m));
    }
}

export class MessageSubscriberOne extends Observer {
    constructor() {
        super();
    }

    update(m: Message) {
        console.log('MessageSubscriberOne :: ' + m.getMessageContent());
    }
}

export class MessageSubscriberTwo extends Observer {
    constructor() {
        super();
    }

    update(m: Message) {
        console.log('MessageSubscriberTwo :: ' + m.getMessageContent());
    }
}

export class MessageSubscriberThree extends Observer {
    constructor() {
        super();
    }

    update(m: Message) {
        console.log('MessageSubscriberThree :: ' + m.getMessageContent());
    }
}

// How to use?
export class ObserverTest {
    static test() {
        const s1: MessageSubscriberOne = new MessageSubscriberOne();
        const s2: MessageSubscriberTwo = new MessageSubscriberTwo();
        const s3: MessageSubscriberThree = new MessageSubscriberThree();

        const p: MessagePublisher = new MessagePublisher();

        p.subscribe(s1);
        p.subscribe(s2);
        p.subscribe(s3);

        p.notify(new Message('First Message'));

        p.unsubscribe(s1);
        p.unsubscribe(s3);

        p.notify(new Message('Second Message'));
    }
}
