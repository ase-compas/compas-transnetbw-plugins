/**
 * Represents the state of an SCL Document. Allows to get the current document and listen to changes on it.
 */


export class DocState {
    doc: XMLDocument | null= $state(null);
    editCount: number = $state(-1);

    private listeners: ((doc: XMLDocument) => void)[] = [];

    setDoc(newDoc: XMLDocument) {
        if(this.editCount === -1) {
            this.listeners.forEach(listener => listener(newDoc));
            this.doc = newDoc;
        }
    }

    setEditCount(newCount: number) {
        this.editCount = newCount;
    }

    registerDocChangeListener(listener: (doc: XMLDocument) => void) {
        this.listeners.push(listener);
    }

    unregisterDocChangeListener(listener: (doc: XMLDocument) => void) {
        this.listeners = this.listeners.filter(l => l !== listener);
    }
}

export const docState = new DocState();