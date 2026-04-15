
    /**
     * Extracts root element ID from XML document if present.
     */
    export function excractRootIdFromXml(doc: XMLDocument): string | undefined {
        const root = doc.documentElement;
        if (root.hasAttribute("id")) {
            return root.getAttribute("id") || undefined;
        }
        return undefined;
    }