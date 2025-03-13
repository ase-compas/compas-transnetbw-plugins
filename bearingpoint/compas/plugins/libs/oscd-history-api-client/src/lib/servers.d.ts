/**
 *
 * Represents the configuration of a server including its
 * url template and variable configuration based on the url.
 *
 */
export declare class ServerConfiguration<T extends {
    [key: string]: string;
}> {
    private url;
    private variableConfiguration;
    private description;
    constructor(url: string, variableConfiguration: T, description: string);
    /**
     * Sets the value of the variables of this server.
     *
     * @param variableConfiguration a partial variable configuration for the variables contained in the url
     */
    setVariables(variableConfiguration: Partial<T>): void;
    getConfiguration(): T;
    getDescription(): string;
    /**
     * Constructions the URL this server using the url with variables
     * replaced with their respective values
     */
    getUrl(): string;
}
export declare const servers: ServerConfiguration<{}>[];
