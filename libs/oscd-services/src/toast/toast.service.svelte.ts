export type ToastType = 'success' | 'error' | 'info' | 'warn';

export type Toast =  {
    id: number;
    summary: string;
    detail?: string;
    type: ToastType
};

const DEFAULT_DURATION = 4_000; // 4 seconds

function createToastService() {

    let toasts = $state<{items: Toast[]}>({items: []});
    let counter = 0;

    const remove = (id: number): void => {
        toasts.items = toasts.items.filter(t => t.id !== id)
    }

    const add = (type: ToastType, summary: string, detail?: string, duration = DEFAULT_DURATION): number => {
        const id = counter++;

        const toast: Toast = {id, summary, detail, type};
        toasts.items = [...toasts.items, toast];

        // auto remove
        setTimeout(() => {
            remove(id);
        }, duration);

        return id;
    }

     return {
        /** readonly state for UI host */
        get toasts() {
            return toasts;
        },

        success: (summary: string, detail?: string, duration?: number) =>
            add('success', summary, detail, duration),

        error: (summary: string, detail?: string, duration?: number) =>
            add('error', summary, detail, duration),

        info: (summary: string, detail?: string, duration?: number) =>
            add('info', summary, detail, duration),

        warn: (summary: string, detail?: string, duration?: number) =>
            add('warn', summary, detail, duration),

        remove
    };
}

export const toastService = createToastService();