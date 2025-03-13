"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.servers = exports.ServerConfiguration = void 0;
/**
 *
 * Represents the configuration of a server including its
 * url template and variable configuration based on the url.
 *
 */
class ServerConfiguration {
    constructor(url, variableConfiguration, description) {
        this.url = url;
        this.variableConfiguration = variableConfiguration;
        this.description = description;
    }
    /**
     * Sets the value of the variables of this server.
     *
     * @param variableConfiguration a partial variable configuration for the variables contained in the url
     */
    setVariables(variableConfiguration) {
        Object.assign(this.variableConfiguration, variableConfiguration);
    }
    getConfiguration() {
        return this.variableConfiguration;
    }
    getDescription() {
        return this.description;
    }
    /**
     * Constructions the URL this server using the url with variables
     * replaced with their respective values
     */
    getUrl() {
        let replacedUrl = this.url;
        for (const key in this.variableConfiguration) {
            if (this.variableConfiguration.hasOwnProperty(key)) {
                const re = new RegExp("{" + key + "}", "g");
                replacedUrl = replacedUrl.replace(re, this.variableConfiguration[key]);
            }
        }
        return replacedUrl;
    }
}
exports.ServerConfiguration = ServerConfiguration;
const server1 = new ServerConfiguration("https://demo.compas.energy", {}, "DSOM Versatel Production URL");
exports.servers = [server1];
//# sourceMappingURL=servers.js.map