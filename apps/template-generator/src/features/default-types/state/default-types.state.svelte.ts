import type { DefaultTypeList } from "../types";
import { defaultTypeService } from "../../../bootstrap";
import type { TypeKind } from "apps/template-generator/src/shared/model";

export class DefaultTypesState {

    loading: boolean = $state(false)
    error: string | null = $state(null)
    data: DefaultTypeList | null = $state(null)

    query: string = $state("")
    kindFilter: TypeKind | undefined = $state(undefined)
    instanceFilter: string | undefined = $state(undefined)

    async load() {
        this.loading = true;
        this.error = null;
        try {
            this.data = await defaultTypeService.listLatest({ page: 0, size: 100 });
        } catch (error) {
            console.log("error")
            this.error = "Failed to load default types";
        } finally {
            this.loading = false;
        }
    }

    filteredTypes = $derived.by(() => {
        if (!this.data) return [];

        const lowerQuery = this.query.trim().toLowerCase();

        return this.data.content?.filter((item) => {
            const matchesKind = !this.kindFilter || item.kind === this.kindFilter;
            const matchesInstance = !this.instanceFilter
                || item.instance === this.instanceFilter;
            const matchesQuery = !lowerQuery
                || item.kind?.toLowerCase().includes(lowerQuery)
                || item.instance?.toLowerCase().includes(lowerQuery)
                || item.description?.toLowerCase().includes(lowerQuery)
                || item.version?.toLowerCase().includes(lowerQuery)
                ;

            return matchesKind && matchesInstance && matchesQuery;
        }) || [];
    });
}
